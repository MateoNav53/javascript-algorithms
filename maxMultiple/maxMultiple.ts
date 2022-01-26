export function maxMultiple(divisor: number, bound: number): number {
    //for loop
    // let max = divisor
    // for(let i=max;i < bound;i++){
    //     if(i > max && i % divisor === 0){
    //         max = i
    //     }
    // }
    // return max

    //cleaner solution with modulus
    let remainder = bound % divisor
    return bound - remainder
}

console.log(maxMultiple(3,10));