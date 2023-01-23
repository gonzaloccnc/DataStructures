import { describe, expect, test } from 'vitest'
import { fibonacci } from '../src/fibonacci/fibonacci'

describe('Fibonnaci test', () => {
  test('should returns 0 and 1', () => {
    expect(fibonacci(0)).toBe(0)
    expect(fibonacci(1)).toBe(1)
  })

  test('should returns 8', () => {
    expect(fibonacci(6)).toBe(8)
  })
})

// F(n) = F(n - 1) + F(n - 2)
// 0, 1, 1, 2, 3, 5, 8, 13, 21