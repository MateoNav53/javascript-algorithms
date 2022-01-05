export function compareIntegers(a: string, b: string): string {
    const n1 = parseInt(a)
    const n2 = parseInt(b)
    return n1 > n2 ? "greater" : n2 > n1 ? "less" : "equal"
}

console.log(compareIntegers('12', '13'));
console.log(compareIntegers('875', '799'));
console.log(compareIntegers('1000', '1000'));