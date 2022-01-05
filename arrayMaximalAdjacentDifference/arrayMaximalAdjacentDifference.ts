export function arrayMaximalAdjacentDifference(inputArray: number[]) {
    let diffArr = []
    let max = 0
    for(let i=0;i < inputArray.length;i++){
        diffArr.push(Math.abs(inputArray[i] - inputArray[ i + 1]))
    }
    return Math.max(...diffArr.filter((i) => !isNaN(i)))
}

console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));