export function digitDegree(n: number) {
    //show how many times you need to change a number before the sum of its digits total a single digit number
    let newNum = n
    let steps = 0
    if(newNum < 10){
        return steps
    }
    else {
        while(true){
            steps++
            newNum = getDigit(newNum)
            if(newNum < 10){
                break
            }
        }
    }
    return steps
    
    
}

function getDigit(num){
    const nums = num.toString().split('').map((element) => parseInt(element))
    return nums.reduce((a, b) => a + b)
}

console.log(digitDegree(5));
console.log(digitDegree(10));
console.log(digitDegree(91));