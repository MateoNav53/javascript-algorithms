export function findClosestPair(numbers: number[], sum: number): number {
    let closestDistance = numbers.length
    for(let i=0;i < numbers.length;i++){
        for(let j= i + 1;j < numbers.length;j++){
            if(numbers[i] + numbers[j] === sum && Math.abs(i - j) < closestDistance){
                closestDistance = Math.abs(i - j)
            }
        }
    }
    return closestDistance === numbers.length ? -1 : closestDistance
}

console.log(findClosestPair([1, 0, 2, 4, 3, 0], 5));
console.log(findClosestPair([2, 3, 7], 8));