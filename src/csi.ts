// Utilities
import { wrap } from './common'

const NumArray = '⁰¹²³⁴⁵⁶⁷⁸⁹'
const ZeroCode = '0'.charCodeAt(0)
const numberToSubStr = (num: string | number) => {
  const str = num.toString()
  return str
    .split('')
    .map(c => {
      return NumArray[c.charCodeAt(0) - ZeroCode]
    })
    .join('')
}

const t = (curr: (string | number)[]) => {
  let result = ''
  const [first, p1, p2] = curr
  switch (first) {
    case 'up':
      result = wrap('￪' + numberToSubStr(p1))
      break
    case 'down':
      result = wrap('￬' + numberToSubStr(p1))
      break
    case 'forward':
      result = wrap('￫' + numberToSubStr(p1))
      break
    case 'back':
      result = wrap('￩' + numberToSubStr(p1))
      break
    case 'nextLine':
      result = wrap('⤦' + numberToSubStr(p1))
      break
    case 'prevLine':
      result = wrap('⤣' + numberToSubStr(p1))
      break
    case 'h-abs':
      result = wrap('⇺' + numberToSubStr(p1))
      break
    case 'pos':
      result = wrap('⌖' + numberToSubStr(p1) + 'ᱸ' + numberToSubStr(p2))
      break
    case 'eraseInDis':
      if (p1 === 0) {
        result = wrap('☒→')
      } else if (p1 === 1) {
        result = wrap('←☒')
      } else {
        result = wrap('☒↔')
      }
      break
    case 'eraseInLine':
      if (p1 === 0) {
        result = wrap('⨯→')
      } else if (p1 === 1) {
        result = wrap('←⨯')
      } else {
        result = wrap('⨯↔')
      }
      break
    case 'scrollUp':
      result = wrap('⇡' + numberToSubStr(p1))
      break
    case 'scrollDown':
      result = wrap('⇣' + numberToSubStr(p1))
      break
    case 'cursorOn':
      result = wrap('I')
      break
    case 'cursorOff':
      result = wrap('I\u0337')
      break
  }
  return result
}

export default t
