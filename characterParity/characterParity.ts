export function characterParity(symbol: string): string {
    return isNaN(parseInt(symbol)) ? 'not a digit'
    : parseInt(symbol) % 2 === 0 ? 'even'
    : 'odd'
}

console.log(characterParity('5'))
console.log(characterParity('8'))
console.log(characterParity('q'))
