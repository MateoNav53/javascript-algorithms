export function longestDigitsPrefix(inputString: string): string {
    const arr = inputString.split('')
    let prefix = ''
    for(let item of arr){
        const num = parseInt(item)
        if(isNaN(num)){
            break
        }
        prefix += item
    }
    return prefix
}

console.log(longestDigitsPrefix('123aa1'));