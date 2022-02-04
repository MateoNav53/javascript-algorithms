export function palindromeRearranging(inputString: string): boolean {
    const letterObj = {}
    let oddCount = 0
    let stringArr = inputString.split('')
    for(let i=0;i < stringArr.length;i++){
        if(letterObj.hasOwnProperty(stringArr[i])){
            letterObj[stringArr[i]]++
        } else {
            letterObj[stringArr[i]] = 1
        }
    }
    for(const property in letterObj){
        if(letterObj[property] % 2 !== 0){
            oddCount++
        }
    }
    return oddCount <= 1
}

console.log(palindromeRearranging('aabb'));