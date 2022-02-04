export function pigLatin(str: string): string {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    let stringArr = str.toLowerCase().split('')
    if(vowels.includes(str.toLowerCase()[0])){
        return str + 'way'
    } else {
        while(true){
            if(!vowels.includes(stringArr[0])){
                stringArr.push(stringArr.splice(0, 1)[0])
            } else {
                break
            }
        }
        return stringArr.join('') + 'ay'
        
    }
}

console.log(pigLatin("glove"));
console.log(pigLatin("eight"));
