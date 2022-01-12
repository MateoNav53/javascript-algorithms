export function firstNotRepeatingCharacter(s: string): string {
    //Using objects, this might be too much code though
    let arr = s.split('')
    let obj = {}
    for(let val of arr){
        if(obj.hasOwnProperty(val)){
            obj[val]++
        } else {
            obj[val] = 1
        }
    }
    //return the first object property with the value 1
    for(const prop in obj){
        if(obj[prop] === 1){
            return prop
        }
    }
    return "-"

}

console.log(firstNotRepeatingCharacter('abacabad'));
console.log(firstNotRepeatingCharacter('abacabaabacaba'));
