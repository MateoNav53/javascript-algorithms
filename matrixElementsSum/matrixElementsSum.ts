export function matrixElementsSum(matrix: any[][]): number {
    //get the sum of all values that aren't zero or below a zero
    let priceTotal = 0
    let flaggedIndex = []
    for(let i=0;i< matrix.length;i++){
        for(let j=0;j < matrix[i].length;j++){
            //how do we access values that aren't below any zeroes in the array
            if(matrix[i][j] === 0){
                flaggedIndex.push(j)
            }else if(!flaggedIndex.includes(j)){
                priceTotal += matrix[i][j]
            }
        }
    }
    return priceTotal

}

console.log(matrixElementsSum(
    [[0, 1, 1, 2],
    [0, 5, 0, 0],
    [2, 0, 3, 3]]
));
