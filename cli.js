#!/usr/bin/env node
const chalk = require('chalk')
const { readFileSync, writeFileSync } = require('fs')
const pcj = require('./App')
var argv = require('minimist')(process.argv.slice(2));
try {
var infille = argv.i || argv.input,
    outFile = argv.o || argv.output
    writeFileSync(outFile, pcj(JSON.parse(readFileSync(infille).toString()), outFile,argv.t || argv.tag ))
}
catch(e) {
console.log(chalk.redBright.bold('Oops we got a problem'))
}