export function fancyRide(l: number, fares: number[]): string {
    let estimates = fares.map((i) => i * l).filter((i) => i <= 20)
    let rideType = ["UberX", "UberXL", "UberPlus", "UberBlack", "UberSUV"]
    return rideType[estimates.length - 1]
    
}

console.log(fancyRide(30, [0.3, 0.5, 0.7, 1, 1.3]));