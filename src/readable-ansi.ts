// Packages
import tokenize from '@nxmix/tokenize-ansi'

// Utilities
import { wrap } from './common'
import csi from './csi'
import sgr from './sgr'

const t = (str: string) => {
  const nodes = tokenize(str)
  const result = nodes.reduce((sum: string, curr: (string | number)[]) => {
    const [first, p1] = curr
    if (first === 'text') {
      sum += p1
    } else if (first === 'unknown') {
      sum += wrap(p1 + '?')
    } else {
      let r = csi(curr)
      if (r) {
        sum += r
      } else {
        r = sgr(curr)
        if (r) {
          sum += r
        }
      }
    }
    return sum
  }, '')
  return result
}

export default t
