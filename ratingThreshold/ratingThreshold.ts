export function ratingThreshold(threshold: number, ratings: number[][]): number[] {
    let needsReview = []
    for(let i=0;i < ratings.length;i++){
        let avg = ratings[i].reduce((a, b) => a + b, 0) / ratings[i].length
        if(avg < threshold){
            needsReview.push(i)
        }
    }
    return needsReview
}

console.log(ratingThreshold(3.5, 
    [[3, 4],
    [3, 3, 3, 4],
    [4]]));