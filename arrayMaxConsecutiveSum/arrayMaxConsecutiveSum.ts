export function arrayMaxConsecutiveSum(inputArray: number[], k: number): number {
    //Solution 1
    // let sumsArr = []
    // let total = 0
    // for(let i = 0;i < inputArray.length;i++){
    //     for(let j = 0;j < k;j++){
    //         total = inputArray[j] + inputArray[j + 1]
    //     }
    //     sumsArr.push(total)
    // }
    // return Math.max(...sumsArr)

    //Solution 2
    let sum = 0
    let max = 0
    for(let i = 0;i < k;i++){
        sum += inputArray[i]
    }

    max = sum

    for(let i = k;i < inputArray.length;i++){
        sum -= inputArray[i - k];
        sum += inputArray[i]
        if(sum > max){
            max = sum
        }
    }

    return max
}

console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2));