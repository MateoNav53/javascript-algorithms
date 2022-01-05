export function bishopAndPawn(bishop: string, pawn: string): boolean {
    let bChar = bishop.charCodeAt(0)
    let pChar = pawn.charCodeAt(0)
    let bNum = parseInt(bishop[1])
    let pNum = parseInt(pawn[1])
    return Math.abs(bChar - pChar) >= 1 && Math.abs(bNum - pNum) >= 1

}

console.log(bishopAndPawn('c1', 'c4'));