export function arrayChange(inputArray: number[]): number {
    //solution 1
    // let moves = 0
    // for(let i=0;i < inputArray.length;i++){
    //     if(inputArray[i + 1] !== inputArray[i] + 1) {
    //         inputArray[i]++
    //         moves++
    //     }
    // }
    // return moves

    //solution 2
    let count = 0

    for(let i=0;i < inputArray.length;i++){
        if(inputArray[i] >= inputArray[i + 1]){
          const difference = (inputArray[i] + 1) - inputArray[i + 1]
          inputArray[i + 1] = inputArray[i] + 1
          count += difference
        }
    }
    return count
}

console.log(arrayChange([1, 1, 1]));