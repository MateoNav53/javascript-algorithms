export function absoluteValuesSumMinimization(a: number[]): number {
    
    //initialize a variable that returns true if the length of the aray is even
    const even = a.length % 2 === 0

    //these arrays aren't sorted like they say in the Readme, but if we do sort it then the results are different
    // a.sort((a, b) => a - b)

    //return a ternary saying if it's even, get the index at the halfway mark
    //and subtract one to get the lower end
    //otherwise if it's odd, use Math.floor 
    return even ? a[a.length / 2 - 1] : a[Math.floor(a.length / 2)]
}

// console.log(absoluteValuesSumMinimization([2, 4, 7]));
// console.log(absoluteValuesSumMinimization([2, 4, 7, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]));
// console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]));