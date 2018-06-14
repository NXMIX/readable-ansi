import chalk from 'chalk'
import pretty from './src/readable-ansi'

console.log(pretty(chalk.red('red')))
console.log(pretty('\x1b[1A\x1b[1B'))
