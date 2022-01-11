export function composeRanges(nums: number[]): string[] {
    if(nums.length < 1){
        return []
    }
    let arr = []
    //initialize an object with properties start and end set to the first item of the numbers array
    const ranges = [{start: nums[0], end: nums[0]}]
    for(let i=1;i < nums.length;i++){
        //if adding one to the end value of the last index of our object is equal to the current iteration
        console.log(ranges[ranges.length - 1])
        if(ranges[ranges.length - 1].end + 1 === nums[i]){
            //set the end property to the current iteration
            ranges[ranges.length - 1].end = nums[i]
        } else {
            //otherwise, initialize a new range
            ranges.push({start: nums[i], end: nums[i]})
        }
    }
    for(const property in ranges){
        if(ranges[property].start === ranges[property].end){
            arr.push(`${ranges[property].start}`)
        } else {
            arr.push(`${ranges[property].start}->${ranges[property].end}`)
        }
        
    }
    return arr
}

console.log(composeRanges([-1, 0, 1, 2, 6, 7, 9]));