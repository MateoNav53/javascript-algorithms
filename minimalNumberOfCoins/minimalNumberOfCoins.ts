export function minimalNumberOfCoins(coins: number[], price: number): number {
    let arr = []
    let target = price
    for(let i=coins.length - 1;i >= 0;i--){
        while(target > 0){
            
        }
        if(price % coins[i] === 0){
            arr.push(price / coins[i])
        } else {
            arr.push(price / coins[i])

        }
    }
    return arr.reduce((a, b) => a + b)
}

console.log(minimalNumberOfCoins([1, 2, 10], 28));