#!/usr/bin/env node
const chalk = require('chalk')
const { readFileSync, writeFileSync } = require('fs')
const pcj = require('./App')
const argv = require('minimist')(process.argv.slice(2))
try {
  const infille = argv.i || argv.input
  const outFile = argv.o || argv.output
  writeFileSync(outFile, pcj(JSON.parse(readFileSync(infille).toString()), outFile, argv.t || argv.tag))
} catch (e) {
  console.log(chalk.redBright.bold('Oops we got a problem'))
}
