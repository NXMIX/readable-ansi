import t from '../src/readable-ansi'
import { wrap as w } from '../src/common'
import { CSI } from './util'

describe('pure text', () => {
  it('pure text', () => {
    const str = 'pure text'
    expect(t(str)).toBe(str)
  })
})

describe('unknown', () => {
  it('unknown', () => {
    const str = CSI + '1Z'
    expect(t(str)).toBe(str)
  })

  it('unknown code', () => {
    const str = CSI + '200m'
    expect(t(str)).toBe(w('200?'))
  })
})
