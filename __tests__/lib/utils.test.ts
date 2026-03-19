import { describe, it, expect } from 'vitest'
import { cn } from '@/lib/utils'

describe('cn', () => {
  it('returns a single class name unchanged', () => {
    expect(cn('foo')).toBe('foo')
  })

  it('merges multiple class names', () => {
    expect(cn('foo', 'bar')).toBe('foo bar')
  })

  it('deduplicates conflicting Tailwind classes (last wins)', () => {
    expect(cn('text-red-500', 'text-blue-500')).toBe('text-blue-500')
  })

  it('ignores falsy values', () => {
    expect(cn('foo', undefined, null, false, 'bar')).toBe('foo bar')
  })

  it('handles conditional object syntax', () => {
    expect(cn({ 'font-bold': true, 'italic': false })).toBe('font-bold')
  })

  it('returns empty string when no valid classes given', () => {
    expect(cn(undefined, false, null)).toBe('')
  })
})
