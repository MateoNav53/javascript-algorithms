export function containsDuplicates(a: number[]): boolean {
    //double for loop solution
    // for(let i=0;i < a.length;i++){
    //     for(let j= i + 1;j < a.length;j++){
    //         if(a[i] === a[j]){
    //             return true
    //         }
    //     }
    // }
    // return false

    //single for loop solution
    //more efficient runtime b/c it'll catch lower numbers sooner
    a = a.sort((a, b) => a - b)
    
    for(let i=0;i < a.length;i++){
        if(a[i] === a[i + 1]){
            return true
        }
    }
    return false
}

console.log(containsDuplicates([1, 2, 3, 1]));
console.log(containsDuplicates([3, 1]));
