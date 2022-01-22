export function lateRide(n: number): number {
    let hour = Math.floor(n / 60)
    console.log(hour)
    let min = n - (Math.floor(n / 60) * 60)
    console.log(min)
    let arr = (hour.toString() + min.toString()).split('')
    return arr.reduce((a, b) => a + parseInt(b), 0)
}

console.log(lateRide(240));
console.log(lateRide(808));
