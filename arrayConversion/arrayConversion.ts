export function arrayConversion(inputArray: number[]): number {
    //Solution 1
    
    // while(inputArray.length > 1){
    //     let even = true
    //     let tempArr = []
    //     for(let i=0;i < inputArray.length;i + 2){
    //         if(even){
    //             tempArr.push(inputArray[i] + inputArray[i + 1])
    //         } else {
    //             tempArr.push(inputArray[i] * inputArray[i + 1])
    //         }
    //         console.log(tempArr)
    //     }
    //     inputArray = tempArr
    //     even = !even
        
    // }
    // return inputArray[0]

    //Solution 2
    

    // Solution 3
    let isOdd = true
    while(inputArray.length > 1){
        inputArray = sumProduct(inputArray, isOdd)
        isOdd = !isOdd
    }
    return inputArray[0]

    
}

console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]));

//Part of solution 2
function sumProduct(nums: number[], isOdd: boolean): number[] {
    const sumProducts: number[] = []

    if(isOdd){
        for(let i = 0;i < nums.length;i + 2){
            sumProducts.push(nums[i] + nums[i + 1])
        }
    } else {
        for(let i = 0;i < nums.length;i + 2){
            sumProducts.push(nums[i] * nums[i + 1])
        }
    }
    return sumProducts
}
