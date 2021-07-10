const proc = require('./App')
const { readFileSync, writeFileSync } = require('fs')
writeFileSync('LOL.md', proc(JSON.parse(readFileSync('./projects.json').toString()), './LOL.md', 'projs'))
// console.log(JSON.parse(readFileSync('./projects.json').toString()))
