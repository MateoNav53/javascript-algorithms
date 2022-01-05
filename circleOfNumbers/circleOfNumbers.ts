export function circleOfNumbers(n: number, firstNumber: number): any {
    const half = Math.floor(n / 2)
    if(firstNumber >= half){
        return firstNumber - half
    }
    return firstNumber + half
}

console.log(circleOfNumbers(10, 2));