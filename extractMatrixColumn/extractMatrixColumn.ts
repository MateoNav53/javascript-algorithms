export function extractMatrixColumn(matrix: number[][], column: number): number[] {
    let newArr = []
    matrix.forEach((arr) => newArr.push(arr[column]))
    return newArr
}

console.log(extractMatrixColumn([[1, 1, 1, 2], [0, 5, 0, 4], [2, 1, 3, 6]], 2));