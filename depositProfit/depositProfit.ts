export function depositProfit(deposit: number, rate: number, threshold: number): number {
    let total = 0;
    let account = deposit
    let rateAmount = rate * .01  
    while(account < threshold){
        account += (account * rateAmount)
        console.log(account)
        total++
    }
    
    return total
}

console.log(depositProfit(100, 20, 170))