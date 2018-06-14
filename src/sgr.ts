// Packages
import chalk from 'chalk'

// Utilities
import { wrap } from './common'

const t = (curr: (string | number)[]) => {
  let result = ''
  const [first, p1, p2, p3, p4] = curr
  switch (first) {
    case 'bold':
      result = wrap('𝐁')
      break
    case 'boldOff':
      result = wrap('𝐁⌀')
      break
    case 'italic':
      result = wrap('𝐼')
      break
    case 'italicOff':
      result = wrap('𝐼⌀')
      break
    case 'underline':
      result = wrap('_')
      break
    case 'underlineOff':
      result = wrap('_⌀')
      break
    case 'normal':
      result = wrap('☐')
      break
    case 'reset':
      result = wrap('®')
      break
    case 'inverseOff':
      result = wrap('◑⌀')
      break
    case 'slowBlink':
    case 'rapidBlink':
      result = wrap('闪')
      break
    case 'blinkOff':
      result = wrap('闪⌀')
      break
    case 'black':
      result = wrap('黑')
      break
    case 'red':
      result = wrap(chalk.red('红'))
      break
    case 'green':
      result = wrap(chalk.green('绿'))
      break
    case 'yellow':
      result = wrap(chalk.yellow('黄'))
      break
    case 'blue':
      result = wrap(chalk.blue('蓝'))
      break
    case 'magenta':
      result = wrap(chalk.magenta('紫'))
      break
    case 'cyan':
      result = wrap(chalk.cyan('青'))
      break
    case 'white':
      result = wrap(chalk.white('白'))
      break
    case 'moreColor':
      result = wrap(`\x1b[38;${p1};${p2};${p3};${p4}m` + 'fT' + '\x1b[39m')
      break
    case 'unknown-more-color':
      result = wrap(chalk.yellow('㉄'))
      break
    case 'fgDefault':
      result = wrap('fD')
      break
    case 'brightBlack':
      result = wrap('黑+')
      break
    case 'brightRed':
      result = wrap(chalk.redBright('红+'))
      break
    case 'brightGreen':
      result = wrap(chalk.greenBright('绿+'))
      break
    case 'brightYellow':
      result = wrap(chalk.yellowBright('黄+'))
      break
    case 'brightBlue':
      result = wrap(chalk.blueBright('蓝+'))
      break
    case 'brightMagenta':
      result = wrap(chalk.magentaBright('紫+'))
      break
    case 'brightCyan':
      result = wrap(chalk.cyanBright('青+'))
      break
    case 'brightWhite':
      result = wrap(chalk.whiteBright('白+'))
      break
    case 'bgBlack':
      result = wrap(chalk.bgBlack('黑'))
      break
    case 'bgRed':
      result = wrap(chalk.bgRed('红'))
      break
    case 'bgGreen':
      result = wrap(chalk.bgGreen('绿'))
      break
    case 'bgYellow':
      result = wrap(chalk.bgYellow('黄'))
      break
    case 'bgBlue':
      result = wrap(chalk.bgBlue('蓝'))
      break
    case 'bgMagenta':
      result = wrap(chalk.bgMagenta('紫'))
      break
    case 'bgCyan':
      result = wrap(chalk.bgCyan('青'))
      break
    case 'bgWhite':
      result = wrap(chalk.bgWhite('白'))
      break
    case 'bgMoreColor':
      result = wrap(`\x1b[48;${p1};${p2};${p3};${p4}m` + 'bT' + '\x1b[49m')
      break
    case 'bgDefault':
      result = wrap('bD')
      break
    case 'bgBrightBlack':
      result = wrap(chalk.bgBlackBright('黑+'))
      break
    case 'bgBrightRed':
      result = wrap(chalk.bgRedBright('红+'))
      break
    case 'bgBrightGreen':
      result = wrap(chalk.bgGreenBright('绿+'))
      break
    case 'bgBrightYellow':
      result = wrap(chalk.bgYellowBright('黄+'))
      break
    case 'bgBrightBlue':
      result = wrap(chalk.bgBlueBright('蓝+'))
      break
    case 'bgBrightMagenta':
      result = wrap(chalk.bgMagentaBright('紫+'))
      break
    case 'bgBrightCyan':
      result = wrap(chalk.bgCyanBright('青+'))
      break
    case 'bgBrightWhite':
      result = wrap(chalk.bgWhiteBright('白+'))
      break
    case 'crossedOut':
      result = wrap('c̶')
      break
    case 'crossedOutOff':
      result = wrap('c̶⌀')
      break
    case 'framed':
      result = wrap('⬚')
      break
    case 'framedOff':
      result = wrap('⬚⌀')
      break
    case 'encircled':
      result = wrap('ⓒ')
      break
    case 'overlined':
      result = wrap('o̅')
      break
    case 'overlinedOff':
      result = wrap('o̅⌀')
      break
  }
  return result
}

export default t
