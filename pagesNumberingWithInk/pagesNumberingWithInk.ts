export function pagesNumberingWithInk(current: number, numberOfDigits: number): number {
    let total = 0
    let fullNumbersArr = []
    while(total < numberOfDigits){
        let digitsArr = current.toString().split('')
        console.log(digitsArr)
        total += digitsArr.length
        if(total <= numberOfDigits){
            fullNumbersArr.push(current)
        }
        current++


    }
    return fullNumbersArr[fullNumbersArr.length - 1]
}

console.log(pagesNumberingWithInk(1, 5));
console.log(pagesNumberingWithInk(21, 5));
console.log(pagesNumberingWithInk(8, 4));