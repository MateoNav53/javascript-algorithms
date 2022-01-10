export function extractEachKth(inputArray: number[], k: number): number[] {
    //take out the array element at every kth
    
    return inputArray.filter((i, index) => {
        return (index + 1) % k !== 0
    })
    
}

console.log(extractEachKth([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));