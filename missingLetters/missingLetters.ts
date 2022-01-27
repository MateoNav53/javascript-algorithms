export function missingLetters(str: string): string {
    //using char codes
    for(let i=0;i < str.length - 1;i++){
        //if the next character isn't one character code greater than the previous
        if(str.charCodeAt(i + 1) !== str.charCodeAt(i) + 1){
            //return the missing character
            return String.fromCharCode(str.charCodeAt(i) + 1)
        }
    }
    return undefined
    
    //creating an alphabet array and comparing it to our string. cleaner
    // let alphabet = "abcdefghijklmnopqrstuvwxyz".split('')
    // for(let i=0;i < str.length;i++){
    //     if(str[i] !== alphabet[i]){
    //         return alphabet[i]
    //     }
    // }
    // return undefined

}

console.log(missingLetters("bce"));
console.log(missingLetters("abce"));
console.log(missingLetters("abcdefghjklmno"));
console.log(missingLetters("abcdefghijklmnopqrstuvwxyz"));