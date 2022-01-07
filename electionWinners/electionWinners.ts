export function electionsWinners(votes: number[], k: number): number {
    let contenders = []
    let highest = Math.max(...votes)
    votes.forEach((i) => {
        if((i + k) > highest){
            contenders.push(i)
        }
    })
    return contenders.length
    
}

console.log(electionsWinners([2, 3, 5, 2], 3));
console.log(electionsWinners([20, 5, 15, 22, 1, 2, 23], 5))