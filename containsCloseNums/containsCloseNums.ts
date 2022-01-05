export function containsCloseNums(nums: number[], k: number): boolean {
    for(let i=0;i < nums.length;i++){
        for(let j= i + 1;j < nums.length;j++){
            if(nums[i] === nums[j]){
                return Math.abs(i - j) <= k;
            }
        }
    }
}

console.log(containsCloseNums([0, 1, 2, 3, 5, 2], 3));
console.log(containsCloseNums([0, 1, 2, 3, 5, 2], 2));