export function alternatingSums(a: number[]): number[] {
    let t1 = []
    let t2 = []
    a.forEach((item, index) => {
        if(index % 2 === 0){
            t1.push(item)
        } else {
            t2.push(item)
        }
    })
    return [(t1.reduce((a, b) => a + b)), (t2.reduce((a, b) => a + b))]
}

console.log(alternatingSums([50, 60, 60, 45, 70]))