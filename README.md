# readable-ansi

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Build Status](https://travis-ci.org/NXMIX/readable-ansi.svg)](https://travis-ci.org/NXMIX/readable-ansi)
[![Coverage Status](https://coveralls.io/repos/github/NXMIX/readable-ansi/badge.svg)](https://coveralls.io/github/NXMIX/readable-ansi)
[![npm](https://img.shields.io/npm/v/@nxmix/readable-ansi.svg)](https://www.npmjs.com/package/@nxmix/readable-ansi/)

> visualize a string that includes ansi codes.

## Usage

### install

```bash
npm i @nxmix/readable-ansi --save
```

### example

```ts
import chalk from 'chalk'
import pretty from './src/readable-ansi'

pretty(chalk.red('red'))
// => (红)red(fD) color red/red/back to default foreground color

pretty('\x1b[1A\x1b[1B')
// => (￪¹)(￬¹) cursor-up/cursor-down

```

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind are welcome!
