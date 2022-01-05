export function companyBotStrategy(trainingData: number[][]): number {
    let arr = []
    trainingData.forEach((item) => {
        if(item[1] > 0){
            arr.push(item[0])
            }
        }
    )
    return arr.length > 0 ? arr.reduce((a, b) => a + b, 0) / arr.length : 0
}

console.log(companyBotStrategy([[3, 1], [6, 1], [4, 1], [5, 1]]));
console.log(companyBotStrategy([[4, 1], [4, -1], [0, 0], [6, 1]]));
console.log(companyBotStrategy( [[4, -1], [0, 0], [5, -1]]));
