export function crossingSum(matrix: number[][], a: number, b: number): number {
    let row = matrix[a].reduce((a, b) => a + b, 0)
    let total = 0
    //using forEach, subtracting value we want to omit at the end
    // matrix.forEach((arr) => {
    //     total += arr[b]
    // })
    // return (total - matrix[a][b]) + row

    //for loop
    //if our index is the value we want to omit, add 0
    //otherwise, add the value in row a, index b
    for(let i=0;i < matrix.length;i++){
        total += i === a ? 0 : matrix[i][b];
    }
    return row + total

}

console.log(crossingSum([[1, 1, 1, 1], 
    [2, 2, 2, 2], 
    [3, 3, 3, 3]], 1, 3));