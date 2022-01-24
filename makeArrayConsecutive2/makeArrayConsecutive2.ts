export function makeArrayConsecutive2(statues: number[]): number {
    //my original solution
    // let sortedArr = statues.sort((a, b) => a - b)
    // console.log(sortedArr)
    // let statuesNeeded = 0
    // for(let i=0;i < sortedArr.length - 1;i++){
    //     if(sortedArr[i + 1] !== sortedArr[i] + 1){
    //         statuesNeeded+= (sortedArr[i + 1] - sortedArr[i] - 1)
    //     }
    // }
    // return statuesNeeded

    //cleaner solution
    const sortedArr = statues.sort((a, b) => a - b)
    let statuesNeeded = 0
    let min = sortedArr[0]
    let max = sortedArr[sortedArr.length - 1]
    for(let i=min;i < max;i++){
        if(!sortedArr.includes(i)){
            statuesNeeded++
        }
    }
    return statuesNeeded
    
}

console.log(makeArrayConsecutive2([6, 2, 3, 9, 12]));