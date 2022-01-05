export function arrayPreviousLess(items: number[]): number[] {
    //initialize and array at the top
    const lessThanList: number[] = []

    //iterate backwards through the array
    for(let i = items.length - 1; i >= 0; i --){
        //check each array value before current value and run a comparison
        for(let j=i;j>= 0;j--){
            //if the current value is greater than 
            if(items[i] > items[j]){
                //put that value at the front of our lessThanList
                lessThanList.unshift(items[j])
                //end the loopfor that 
                break;
            } else if(j === 0){
                lessThanList.unshift(-1)
            }
        }
    }
    return lessThanList

    
}

console.log(arrayPreviousLess([3, 5, 2, 4, 5]));