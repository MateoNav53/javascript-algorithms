export function fareEstimator(ride_time: number, ride_distance: number, cost_per_minute: number[], cost_per_mile: number[]): number[] {
    //using map and a for loop
    // let timeCost = cost_per_minute.map((item) => ride_time * item)
    // let mileCost = cost_per_mile.map((item) => ride_distance * item)
    // let fareArr = []
    // for(let i=0;i < timeCost.length;i++){
    //     fareArr.push(parseFloat((timeCost[i] + mileCost[i]).toPrecision(3)))
    // }
    // return fareArr

    //using one for loop
    let fareArr = []
    for(let i=0;i < cost_per_minute.length;i++){
        fareArr.push(parseFloat((ride_time * cost_per_minute[i] + ride_distance * cost_per_mile[i]).toFixed(1)))
    }
    return fareArr

}

console.log(fareEstimator(30, 7, [0.2, 0.35, 0.4, 0.45], [1.1, 1.8, 2.3, 3.5]));
