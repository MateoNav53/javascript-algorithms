export function factorializeANumber(num: number): number {
    //Using Recursion
    if(num === 0){
        return 1
    } else {
        return num * factorializeANumber(num - 1)
    }

    //For loop
    // let total = 1
    // for(let i=1;i <= num;i++){
    //     total *= i
    // }
    // return total
}

console.log(factorializeANumber(5));
console.log(factorializeANumber(10));