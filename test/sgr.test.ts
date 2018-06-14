import t from '../src/readable-ansi'
import chalk from 'chalk'
import { CSI } from './util'
import { wrap as w } from '../src/common'

describe('foreground color', () => {
  it('naming colors', () => {
    expect(t(CSI + '30m')).toBe(w('黑'))
    expect(t(CSI + '31m')).toBe(w(chalk.red('红')))
    expect(t(CSI + '32m')).toBe(w(chalk.green('绿')))
    expect(t(CSI + '33m')).toBe(w(chalk.yellow('黄')))
    expect(t(CSI + '34m')).toBe(w(chalk.blue('蓝')))
    expect(t(CSI + '35m')).toBe(w(chalk.magenta('紫')))
    expect(t(CSI + '36m')).toBe(w(chalk.cyan('青')))
    expect(t(CSI + '37m')).toBe(w(chalk.white('白')))
    expect(t(CSI + '39m')).toBe(w('fD'))
  })

  it('naming bright colors', () => {
    expect(t(CSI + '90m')).toBe(w('黑+'))
    expect(t(CSI + '91m')).toBe(w(chalk.redBright('红+')))
    expect(t(CSI + '92m')).toBe(w(chalk.greenBright('绿+')))
    expect(t(CSI + '93m')).toBe(w(chalk.yellowBright('黄+')))
    expect(t(CSI + '94m')).toBe(w(chalk.blueBright('蓝+')))
    expect(t(CSI + '95m')).toBe(w(chalk.magentaBright('紫+')))
    expect(t(CSI + '96m')).toBe(w(chalk.cyanBright('青+')))
    expect(t(CSI + '97m')).toBe(w(chalk.whiteBright('白+')))
  })

  it('true color', () => {
    expect(t(CSI + '38;2;255;165;0m')).toBe(w(`\x1b[38;2;255;165;0m` + 'fT' + '\x1b[39m'))
  })

  it('unknown more color', () => {
    expect(t(CSI + '38;6;255;165;0m')).toBe(w(chalk.yellow('㉄')))
  })
})

describe('background color', () => {
  it('naming background colors', () => {
    expect(t(CSI + '40m')).toBe(w(chalk.bgBlack('黑')))
    expect(t(CSI + '41m')).toBe(w(chalk.bgRed('红')))
    expect(t(CSI + '42m')).toBe(w(chalk.bgGreen('绿')))
    expect(t(CSI + '43m')).toBe(w(chalk.bgYellow('黄')))
    expect(t(CSI + '44m')).toBe(w(chalk.bgBlue('蓝')))
    expect(t(CSI + '45m')).toBe(w(chalk.bgMagenta('紫')))
    expect(t(CSI + '46m')).toBe(w(chalk.bgCyan('青')))
    expect(t(CSI + '47m')).toBe(w(chalk.bgWhite('白')))
    expect(t(CSI + '49m')).toBe(w('bD'))
  })

  it('naming background bright colors', () => {
    expect(t(CSI + '100m')).toBe(w(chalk.bgBlackBright('黑+')))
    expect(t(CSI + '101m')).toBe(w(chalk.bgRedBright('红+')))
    expect(t(CSI + '102m')).toBe(w(chalk.bgGreenBright('绿+')))
    expect(t(CSI + '103m')).toBe(w(chalk.bgYellowBright('黄+')))
    expect(t(CSI + '104m')).toBe(w(chalk.bgBlueBright('蓝+')))
    expect(t(CSI + '105m')).toBe(w(chalk.bgMagentaBright('紫+')))
    expect(t(CSI + '106m')).toBe(w(chalk.bgCyanBright('青+')))
    expect(t(CSI + '107m')).toBe(w(chalk.bgWhiteBright('白+')))
  })

  it('true background color', () => {
    expect(t(CSI + '48;2;255;165;0m')).toBe(w(`\x1b[48;2;255;165;0m` + 'bT' + '\x1b[49m'))
  })
})

describe('font styles', () => {
  it('bold', () => {
    expect(t(CSI + '1m')).toBe(w('𝐁'))
    expect(t(CSI + '21m')).toBe(w('𝐁⌀'))
  })
  it('italic', () => {
    expect(t(CSI + '3m')).toBe(w('𝐼'))
    expect(t(CSI + '23m')).toBe(w('𝐼⌀'))
  })
  it('underline', () => {
    expect(t(CSI + '4m')).toBe(w('_'))
    expect(t(CSI + '24m')).toBe(w('_⌀'))
  })
})

describe('other styles', () => {
  it('cross-out', () => {
    expect(t(CSI + '9m')).toBe(w('c̶'))
  })
  it('cross-out off', () => {
    expect(t(CSI + '29m')).toBe(w('c̶⌀'))
  })
  it('framed', () => {
    expect(t(CSI + '51m')).toBe(w('⬚'))
  })
  it('framed off', () => {
    expect(t(CSI + '54m')).toBe(w('⬚⌀'))
  })
  it('encircled', () => {
    expect(t(CSI + '52m')).toBe(w('ⓒ'))
  })
  it('overlined', () => {
    expect(t(CSI + '53m')).toBe(w('o̅'))
  })
  it('overlined off', () => {
    expect(t(CSI + '55m')).toBe(w('o̅⌀'))
  })
  it('inverse off', () => {
    expect(t(CSI + '27m')).toBe(w('◑⌀'))
  })
  it('blink', () => {
    expect(t(CSI + '5m')).toBe(w('闪'))
    expect(t(CSI + '6m')).toBe(w('闪'))
    expect(t(CSI + '25m')).toBe(w('闪⌀'))
  })
  it('reset', () => {
    expect(t(CSI + '0m')).toBe(w('®'))
  })
  it('normal', () => {
    expect(t(CSI + '22m')).toBe(w('☐'))
  })
})
