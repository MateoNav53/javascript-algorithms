export function isLucky(n: number): boolean {
    let arr = n.toString().split('')
    let midIndex = Math.floor(arr.length / 2)
    let firstHalf = arr.slice(0, midIndex)
    let secondHalf = arr.slice(midIndex)
    return firstHalf.reduce((a, b) =>  a + parseInt(b), 0) === secondHalf.reduce((a, b) =>  a + parseInt(b), 0)
}

console.log(isLucky(1230));
console.log(isLucky(239017));