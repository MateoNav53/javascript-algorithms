export function composeRanges(nums: number[]): string[] {
    let arr = []
    for(let i=0;i < nums.length;i++){
        if(nums[i + 1] -  nums[i] !== 1){
            arr.push()
        }
    }
}

console.log(composeRanges([-1, 0, 1, 2, 6, 7, 9]));