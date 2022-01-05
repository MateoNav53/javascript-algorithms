export function alphabetSubsequence(s: string): boolean {
    let codes = s.split('').map((item, index) => s.charCodeAt(index))
    for(let i=0;i < codes.length;i++){
        if(codes[i] <= codes[i - 1]){
            return false
        }
    }
    return true
}

console.log(alphabetSubsequence('zab'))
console.log(alphabetSubsequence('effg'))
console.log(alphabetSubsequence('cdce'))
console.log(alphabetSubsequence('ace'))
console.log(alphabetSubsequence('bxz'))
