var proc = require('./App'),
{readFileSync,writeFileSync} = require('fs')
writeFileSync('LOL.md',proc(JSON.parse(readFileSync('./projects.json').toString()),'./LOL.md'))  
// console.log(JSON.parse(readFileSync('./projects.json').toString()))