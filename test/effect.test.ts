import t from '../src/readable-ansi'
import { CSI } from './util'
import { wrap as w } from '../src/common'

describe('effect', () => {
  it('cursor on', () => {
    const str = CSI + '?25h'
    expect(t(str)).toBe(w('I'))
  })
  it('cursor off', () => {
    const str = CSI + '?25l'
    expect(t(str)).toBe(w('I\u0337'))
  })
})
