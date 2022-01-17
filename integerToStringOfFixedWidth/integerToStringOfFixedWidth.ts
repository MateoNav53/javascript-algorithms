export function integerToStringOfFixedWidth(number: number, width: number): string {
    let arr = number.toString().split('')
    if(arr.length < width){
        while (arr.length < width){
            arr.unshift('0')
        }
    } else if(arr.length > width) {
        while(arr.length > width) {
            arr.shift()
        }
    }
    return arr.join('')

}

console.log(integerToStringOfFixedWidth(1234, 2));
console.log(integerToStringOfFixedWidth(1234, 4));
console.log(integerToStringOfFixedWidth(1234, 5));
