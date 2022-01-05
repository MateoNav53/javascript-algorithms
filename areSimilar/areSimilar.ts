export function areSimilar(a: number[], b: number[]): boolean {
    let sortedA = a.sort((a, b) => a - b)
    let sortedB = b.sort((a, b) => a - b)
    for(let i=0;i < sortedA.length;i++){
        if(sortedA[i] !== sortedB[i]){
            return false
        }
    }
    return true
}

console.log(areSimilar([1, 2, 3], [1, 2, 3]));
console.log(areSimilar([1, 2, 3], [2, 1, 3]));
console.log(areSimilar([1, 2, 2], [2, 1, 1]));
