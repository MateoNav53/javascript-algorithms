export function evenDigitsOnly(n: number): boolean {
    //check if all digits in a number are even
    let arr: number[] = n.toString().split('').map((i) => parseInt(i))
    return arr.every((i) => i % 2 === 0)
    
}

console.log(evenDigitsOnly(248622));
console.log(evenDigitsOnly(642386));