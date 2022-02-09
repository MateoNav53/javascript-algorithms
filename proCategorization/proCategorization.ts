export function proCategorization(pros: string[], preferences: string[][]): string[][][] {
    const obj = {}
    const categorizationArr = []
    for(let i=0;i < preferences.length;i++){
        for(let j=0;j < preferences[i].length;j++){
            if(obj[preferences[i][j]]){
                obj[preferences[i][j]].push(pros[i])
            } else {
                obj[preferences[i][j]] = [pros[i]]
            }
        }
    }
    for(const property in obj){
        categorizationArr.push([[property], obj[property]])
    }


    return categorizationArr.sort((a, b) => {
        if(a[0][0] > b[0][0]){
            return 1
        } else {
            return -1
        }
    })
}

console.log(proCategorization(["Jack", "Leon", "Maria"], [["Computer repair", "Handyman", "House cleaning"],
["Computer lessons", "Computer repair", "Data recovery service"],
["Computer lessons", "House cleaning"]]));