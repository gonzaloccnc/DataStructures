import { describe, expect, test } from 'vitest'
import { SimpleList, List } from '../src/list/SimpleList'
const obj: List<string> = { init: 'Hello', next: null }

describe('Test Simple List', () => {
  test('Shoulw return new simple list', () => {
    expect(SimpleList('Hello').getList()).toMatchObject(obj)
  })
})