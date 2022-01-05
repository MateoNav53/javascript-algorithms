export function boxBlur(image: number[][]): number[][] {
    let count = 0
    let total = 0
    let arr = []
    for(let i=0;i < image.length;i++){
        total += image[i].reduce((a, b) => a + b)
        image[i].forEach((item) => count += item)
    }
    arr.push(Math.floor(total / count))
    return [arr]
}

console.log(boxBlur([[1, 1, 1], 
    [1, 7, 1], 
    [1, 1, 1]]));