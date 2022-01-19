export function largestNumber(n: number): number {
    // let stringNum = '9'
    // while(stringNum.length < n){
    //     stringNum += '9'
    // }
    // return parseInt(stringNum)

    // using the .repeat method
    return parseInt('9'.repeat(n))
}

console.log(largestNumber(2));