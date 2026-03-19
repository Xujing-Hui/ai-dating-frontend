import { describe, it, expect, vi, beforeEach } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useIsMobile } from '@/hooks/use-mobile'

describe('useIsMobile', () => {
  const addEventListenerMock = vi.fn()
  const removeEventListenerMock = vi.fn()

  function setWindowWidth(width: number) {
    Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: width })
  }

  beforeEach(() => {
    addEventListenerMock.mockClear()
    removeEventListenerMock.mockClear()

    vi.stubGlobal('matchMedia', (query: string) => ({
      matches: false,
      media: query,
      addEventListener: addEventListenerMock,
      removeEventListener: removeEventListenerMock,
    }))
  })

  it('returns false when window width is >= 768', () => {
    setWindowWidth(1024)
    const { result } = renderHook(() => useIsMobile())
    expect(result.current).toBe(false)
  })

  it('returns true when window width is < 768', () => {
    setWindowWidth(375)
    const { result } = renderHook(() => useIsMobile())
    expect(result.current).toBe(true)
  })

  it('registers a change listener on matchMedia', () => {
    setWindowWidth(1024)
    renderHook(() => useIsMobile())
    expect(addEventListenerMock).toHaveBeenCalledWith('change', expect.any(Function))
  })

  it('removes the listener on unmount', () => {
    setWindowWidth(1024)
    const { unmount } = renderHook(() => useIsMobile())
    unmount()
    expect(removeEventListenerMock).toHaveBeenCalledWith('change', expect.any(Function))
  })

  it('updates when the viewport changes', () => {
    setWindowWidth(1024)
    const { result } = renderHook(() => useIsMobile())
    expect(result.current).toBe(false)

    act(() => {
      setWindowWidth(375)
      // trigger the change handler that the hook registered
      const changeHandler = addEventListenerMock.mock.calls[0][1]
      changeHandler()
    })

    expect(result.current).toBe(true)
  })
})
