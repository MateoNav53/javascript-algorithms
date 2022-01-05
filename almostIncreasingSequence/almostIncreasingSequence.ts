export function almostIncreasingSequence(sequence: number[]): boolean {
    //initialize a count variable
    let count = 0

    for(let i=0;i < sequence.length;i++){
        //if the current value is less than the previous value
        if(sequence[i] <= sequence[i -1]){
            //add one to count, because that means it isn't increasing
            count++
            //and if that value is smaller than the one two counts before
            //AND the value ahead is smaller than the one two before
            if(sequence[i] <= sequence[i - 2] && sequence[i + 1] <= sequence[i - 1]){
                //just return false, because it fails the checks
                return false
            }
        }
    }
    //if we got 1 for the count, that means one item could've been taken out to make it increase incrementally
    //if it's zero then we already know it's increasing
    return count <= 1
}

console.log(almostIncreasingSequence([1, 3, 2, 1])) 
console.log(almostIncreasingSequence([1, 3, 2])) 