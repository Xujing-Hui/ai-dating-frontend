import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { HistoryPanel } from '@/components/history-panel'

vi.mock('@/components/icons/notebook-icon', () => ({ NotebookIcon: () => null }))
vi.mock('@/components/icons/speech-bubble-icon', () => ({ SpeechBubbleIcon: () => null }))

const mockGetHistory = vi.fn()
const mockDeleteBio = vi.fn()
const mockDeleteStarter = vi.fn()

vi.mock('@/lib/api', () => ({
  getHistory: (...args: unknown[]) => mockGetHistory(...args),
  deleteBio: (...args: unknown[]) => mockDeleteBio(...args),
  deleteStarter: (...args: unknown[]) => mockDeleteStarter(...args),
}))

const sampleBio = { id: 'bio-1', content: 'I love hiking', createdAt: '2026-01-01' }
const sampleStarter = { id: 'st-1', content: 'Hey, coffee or tea?', createdAt: '2026-01-01' }

describe('HistoryPanel', () => {
  beforeEach(() => {
    mockGetHistory.mockClear()
    mockDeleteBio.mockClear()
    mockDeleteStarter.mockClear()
  })

  it('shows a loading spinner initially', () => {
    mockGetHistory.mockReturnValue(new Promise(() => {})) // never resolves
    render(<HistoryPanel />)
    // Loader2 renders as an SVG; check loading via its container
    expect(document.querySelector('.animate-spin')).toBeInTheDocument()
  })

  it('renders saved bios after loading', async () => {
    mockGetHistory.mockResolvedValue({ savedBios: [sampleBio], savedStarters: [] })
    render(<HistoryPanel />)

    await waitFor(() => {
      expect(screen.getByText('I love hiking')).toBeInTheDocument()
    })
  })

  it('renders saved starters after loading', async () => {
    mockGetHistory.mockResolvedValue({ savedBios: [], savedStarters: [sampleStarter] })
    render(<HistoryPanel />)

    await waitFor(() => {
      expect(screen.getByText('Hey, coffee or tea?')).toBeInTheDocument()
    })
  })

  it('shows empty state when no bios saved', async () => {
    mockGetHistory.mockResolvedValue({ savedBios: [], savedStarters: [] })
    render(<HistoryPanel />)

    await waitFor(() => {
      expect(screen.getByText(/no saved bios yet/i)).toBeInTheDocument()
    })
  })

  it('shows empty state when no starters saved', async () => {
    mockGetHistory.mockResolvedValue({ savedBios: [], savedStarters: [] })
    render(<HistoryPanel />)

    await waitFor(() => {
      expect(screen.getByText(/no saved starters yet/i)).toBeInTheDocument()
    })
  })

  it('deletes a bio when delete button is clicked', async () => {
    mockGetHistory.mockResolvedValue({ savedBios: [sampleBio], savedStarters: [] })
    mockDeleteBio.mockResolvedValue(undefined)
    render(<HistoryPanel />)

    await waitFor(() => screen.getByText('I love hiking'))

    await userEvent.click(screen.getByRole('button', { name: /delete saved bio/i }))

    await waitFor(() => {
      expect(mockDeleteBio).toHaveBeenCalledWith('bio-1')
      expect(screen.queryByText('I love hiking')).not.toBeInTheDocument()
    })
  })

  it('deletes a starter when delete button is clicked', async () => {
    mockGetHistory.mockResolvedValue({ savedBios: [], savedStarters: [sampleStarter] })
    mockDeleteStarter.mockResolvedValue(undefined)
    render(<HistoryPanel />)

    await waitFor(() => screen.getByText('Hey, coffee or tea?'))

    await userEvent.click(screen.getByRole('button', { name: /delete saved starter/i }))

    await waitFor(() => {
      expect(mockDeleteStarter).toHaveBeenCalledWith('st-1')
      expect(screen.queryByText('Hey, coffee or tea?')).not.toBeInTheDocument()
    })
  })

  it('collapses saved bios section when toggle is clicked', async () => {
    mockGetHistory.mockResolvedValue({ savedBios: [sampleBio], savedStarters: [] })
    render(<HistoryPanel />)

    await waitFor(() => screen.getByText('I love hiking'))

    const biosToggle = screen.getByText('Saved Bios').closest('button')!
    await userEvent.click(biosToggle)

    await waitFor(() => {
      expect(screen.queryByText('I love hiking')).not.toBeInTheDocument()
    })
  })

  it('shows bio count in header', async () => {
    mockGetHistory.mockResolvedValue({ savedBios: [sampleBio], savedStarters: [] })
    render(<HistoryPanel />)

    await waitFor(() => {
      expect(screen.getByText('(1)')).toBeInTheDocument()
    })
  })

  it('does not crash when getHistory fails', async () => {
    mockGetHistory.mockRejectedValue(new Error('Network error'))
    render(<HistoryPanel />)

    await waitFor(() => {
      expect(screen.getByText(/no saved bios yet/i)).toBeInTheDocument()
    })
  })
})
