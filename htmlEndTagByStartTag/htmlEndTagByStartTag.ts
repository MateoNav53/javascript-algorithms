export function htmlEndTagByStartTag(startTag: string): string {
    if(startTag.includes(' ')) {
        let arr = startTag.split(' ')
        let newTag = arr[0].split('')
        newTag.splice(1, 0, '/')
        return newTag.join('') + '>'
    } else {
        let arr = startTag.split('')
        arr.splice(1, 0, '/')
        return arr.join('')
    }
}

console.log(htmlEndTagByStartTag("<button type='button' disabled>"));
console.log(htmlEndTagByStartTag('<i>'));