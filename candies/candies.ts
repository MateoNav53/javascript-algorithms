export function candies(n: number, m: number): number | string {
    //n is the number of children, m is the total candies
    //each child gets the same number of candy but they have to eat as much candy as possible
    //return the total number of candies eaten
    
    //Solution 1
    if(n > m){
        return 'Candy distribution impossible'
    } else {
        let modResult = m % n
        return m - modResult
    }

}

console.log(candies(3, 10));