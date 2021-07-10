const tap = require('tap')
const pcj = require('./App')
const { readFileSync } = require('fs')

const dtd = JSON.parse(readFileSync('./projects.json').toString())
tap.throws(() => pcj(), new Error('Please enter a vaild data'))
tap.throws(() => pcj(''), new Error('Please enter a vaild data'))
tap.throws(() => pcj([]), new Error('Please enter a vaild data'))
tap.throws(() => pcj(1), new Error('Please enter a vaild data'))
tap.throws(() => pcj(dtd), new Error('Please enter a path'))
tap.throws(() => pcj(dtd, 0), new Error('Please enter a path'))
tap.throws(() => pcj(dtd, ''), new Error('Please enter a path'))
// tap.throws(() => pcj(dtd,'./'), new Error('Please enter a path'))
tap.throws(() => pcj(dtd, './notfound'), new Error('Please enter a path'))
tap.equal(typeof pcj(dtd, './LOL.md', 'projs'), 'string')
tap.equal(readFileSync('./LOL.md').toString(), pcj(dtd, './LOL.md', 'projs'))
