var {readFileSync,writeFileSync,existsSync} = require('fs'),
{extname} = require('path'),
commentMark = require('comment-mark');
module.exports = (data,path,commentval) => {
var ext = extname(path)
    if (!(data && typeof data === 'object' && data.length > 0)) throw new Error('Please enter a vaild data')
    else if (!(path && typeof path === 'string' && path.length > 0 && existsSync(path))) throw new Error('Please enter a path')
return markcomment(data,path,commentval)
}
function mdg(data){
    var d = '',
    md ='';
     data.sort((a,b) => a.category.localeCompare(b.category)).forEach(element => {
         mainc = '\n' + '- ['+element.name+']('+element.url+') : '+element.description
        if(!(d === element.category)) {
            d = element.category
             md += '\n'+'### '+d+mainc
        }
        else md += mainc
    } );
    return md
}
function markcomment(data,path,name) {
    var mainobj = {};
    mainobj[name || 'projects'] = mdg(data)
    return commentMark(readFileSync(path).toString(),mainobj)
}