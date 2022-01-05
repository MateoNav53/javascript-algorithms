export function allLongestStrings(inputArray: string[]): string[] {
    let longest = 0
    for(let i=0;i < inputArray.length;i++){
        if(inputArray[i].length > longest){
            longest = inputArray[i].length
        }
    }
    return inputArray.filter((i) => i.length === longest)
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));