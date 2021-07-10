const { readFileSync, existsSync } = require('fs')
const commentMark = require('comment-mark')
module.exports = (data, path, commentval) => {
  if (!(data && typeof data === 'object' && data.length > 0)) throw new Error('Please enter a vaild data')
  else if (!(path && typeof path === 'string' && path.length > 0 && existsSync(path))) throw new Error('Please enter a path')
  return markcomment(data, path, commentval)
}
function mdg (data) {
  let d = ''
  let md = ''
  data.sort((a, b) => a.category.localeCompare(b.category)).forEach(element => {
    const mainc = '\n' + '- [' + element.name + '](' + element.url + ') : ' + element.description
    if (!(d === element.category)) {
      d = element.category
      md += '\n' + '## ' + d + mainc
    } else md += mainc
  })
  return md
}
function markcomment (data, path, name) {
  const mainobj = {}
  mainobj[name || 'projects'] = mdg(data)
  return commentMark(readFileSync(path).toString(), mainobj)
}
