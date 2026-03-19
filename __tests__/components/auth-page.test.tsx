import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import AuthPage from '@/app/auth/page'

const mockPush = vi.fn()
const mockRefresh = vi.fn()

vi.mock('next/navigation', () => ({
  useRouter: () => ({ push: mockPush, refresh: mockRefresh }),
}))

const mockSignIn = vi.fn()
const mockSignUp = vi.fn()

vi.mock('@/lib/supabase', () => ({
  supabase: {
    auth: {
      signInWithPassword: (...args: unknown[]) => mockSignIn(...args),
      signUp: (...args: unknown[]) => mockSignUp(...args),
    },
  },
}))

describe('AuthPage', () => {
  beforeEach(() => {
    mockPush.mockClear()
    mockRefresh.mockClear()
    mockSignIn.mockClear()
    mockSignUp.mockClear()
  })

  it('renders login mode by default', () => {
    render(<AuthPage />)
    // "Log In 💕" is the submit button; "Log In" is the tab — both exist, so use getAllBy
    expect(screen.getAllByRole('button', { name: /log in/i }).length).toBeGreaterThanOrEqual(1)
    expect(screen.getByPlaceholderText('you@example.com')).toBeInTheDocument()
  })

  it('switches to signup mode when Sign Up tab is clicked', async () => {
    render(<AuthPage />)
    const signUpTab = screen.getByRole('button', { name: /sign up/i })
    await userEvent.click(signUpTab)
    expect(screen.getByRole('button', { name: /sign up ✨/i })).toBeInTheDocument()
  })

  it('shows error message on failed login', async () => {
    mockSignIn.mockResolvedValue({ error: new Error('Invalid credentials') })
    render(<AuthPage />)

    await userEvent.type(screen.getByPlaceholderText('you@example.com'), 'test@test.com')
    await userEvent.type(screen.getByPlaceholderText('••••••••'), 'password123')
    fireEvent.submit(screen.getByRole('button', { name: /log in 💕/i }))

    await waitFor(() => {
      expect(screen.getByText('Invalid credentials')).toBeInTheDocument()
    })
  })

  it('redirects to / on successful login', async () => {
    mockSignIn.mockResolvedValue({ error: null })
    render(<AuthPage />)

    await userEvent.type(screen.getByPlaceholderText('you@example.com'), 'test@test.com')
    await userEvent.type(screen.getByPlaceholderText('••••••••'), 'password123')
    fireEvent.submit(screen.getByRole('button', { name: /log in 💕/i }))

    await waitFor(() => {
      expect(mockPush).toHaveBeenCalledWith('/')
      expect(mockRefresh).toHaveBeenCalled()
    })
  })

  it('shows success message on successful signup', async () => {
    mockSignUp.mockResolvedValue({ error: null })
    render(<AuthPage />)

    await userEvent.click(screen.getByRole('button', { name: /sign up/i }))
    await userEvent.type(screen.getByPlaceholderText('you@example.com'), 'new@user.com')
    await userEvent.type(screen.getByPlaceholderText('••••••••'), 'password123')
    fireEvent.submit(screen.getByRole('button', { name: /sign up ✨/i }))

    await waitFor(() => {
      expect(screen.getByText(/account created/i)).toBeInTheDocument()
    })
  })

  it('shows error on failed signup', async () => {
    mockSignUp.mockResolvedValue({ error: new Error('Email already in use') })
    render(<AuthPage />)

    await userEvent.click(screen.getByRole('button', { name: /sign up/i }))
    await userEvent.type(screen.getByPlaceholderText('you@example.com'), 'existing@user.com')
    await userEvent.type(screen.getByPlaceholderText('••••••••'), 'password123')
    fireEvent.submit(screen.getByRole('button', { name: /sign up ✨/i }))

    await waitFor(() => {
      expect(screen.getByText('Email already in use')).toBeInTheDocument()
    })
  })

  it('disables the submit button while loading', async () => {
    // Never resolve so we can observe the loading state
    mockSignIn.mockReturnValue(new Promise(() => {}))
    render(<AuthPage />)

    await userEvent.type(screen.getByPlaceholderText('you@example.com'), 'test@test.com')
    await userEvent.type(screen.getByPlaceholderText('••••••••'), 'password123')
    fireEvent.submit(screen.getByRole('button', { name: /log in 💕/i }))

    await waitFor(() => {
      expect(screen.getByRole('button', { name: '...' })).toBeDisabled()
    })
  })
})
