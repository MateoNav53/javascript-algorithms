export function newNumeralSystem(number: string): string[] {
    const arr = []
    let startChar = 65
    let endChar = number.charCodeAt(0)

    while(startChar <= endChar){
        const numeral = `${String.fromCharCode(startChar)} + ${String.fromCharCode(endChar)}`
        arr.push(numeral)
        startChar++
        endChar--
    }


    return arr
}

console.log(newNumeralSystem('G'));