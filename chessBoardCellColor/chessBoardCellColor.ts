export function chessBoardCellColor(cell1: string, cell2: string): boolean {
    
    //Solution 1 with way too much code
    //compare two chess board squares. return whether they're the same color
    //how do we get a color from the chess board cell value?
    let cell1Let = cell1.toLowerCase().charCodeAt(0)
    let cell1Num = parseInt(cell1[1])
    let cell2Let = cell2.toLowerCase().charCodeAt(0)
    let cell2Num = parseInt(cell2[1])
    let cell1Color
    let cell2Color
    if((cell1Let % 2 !== 0 && cell1Num % 2 !== 0) || (cell1Let % 2 === 0 && cell1Num % 2 === 0)){
        cell1Color = 'brown'
    } else {
        cell1Color = 'White'
    }
    if((cell2Let % 2 !== 0 && cell2Num % 2 !== 0) || (cell2Let % 2 === 0 && cell2Num % 2 === 0)){
        cell2Color = 'brown'
    } else {
        cell2Color = 'white'
    }
    return cell1Color === cell2Color
    
    }

console.log(chessBoardCellColor('A1', 'C3'));
console.log(chessBoardCellColor('A1', 'H3'));
