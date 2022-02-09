export function properNounCorrection(noun: string): string {
    return noun[0].toUpperCase() + noun.substring(1).toLowerCase()
}

console.log(properNounCorrection('pARiS'));
console.log(properNounCorrection('John'));