import t from '../src/readable-ansi'
import { CSI } from './util'
import { wrap as w } from '../src/common'

describe('cursor move', () => {
  it('cursor up', () => {
    const str = CSI + '12A'
    expect(t(str)).toBe(w('￪¹²'))
  })
  it('cursor down', () => {
    const str = CSI + '12B'
    expect(t(str)).toBe(w('￬¹²'))
  })
  it('cursor forward', () => {
    const str = CSI + '12C'
    expect(t(str)).toBe(w('￫¹²'))
  })
  it('cursor back', () => {
    const str = CSI + '12D'
    expect(t(str)).toBe(w('￩¹²'))
  })
  it('cursor next line', () => {
    const str = CSI + '12E'
    expect(t(str)).toBe(w('⤦¹²'))
  })
  it('cursor prev line', () => {
    const str = CSI + '12F'
    expect(t(str)).toBe(w('⤣¹²'))
  })
  it('moves the cursor to column(abs)', () => {
    const str = CSI + '12G'
    expect(t(str)).toBe(w('⇺¹²'))
  })
  it('moves the cursor to position(x,y)', () => {
    const str = CSI + '12;34H'
    expect(t(str)).toBe(w('⌖¹²ᱸ³⁴'))
  })
  it('clear screen', () => {
    expect(t(CSI + '0J')).toBe(w('☒→'))
    expect(t(CSI + '1J')).toBe(w('←☒'))
    expect(t(CSI + '2J')).toBe(w('☒↔'))
  })
  it('erase in line', () => {
    expect(t(CSI + '0K')).toBe(w('⨯→'))
    expect(t(CSI + '1K')).toBe(w('←⨯'))
    expect(t(CSI + '2K')).toBe(w('⨯↔'))
  })
  it('scroll up', () => {
    expect(t(CSI + '12S')).toBe(w('⇡¹²'))
  })
  it('scroll down', () => {
    expect(t(CSI + '12T')).toBe(w('⇣¹²'))
  })
})
