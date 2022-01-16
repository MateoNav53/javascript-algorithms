export function incrementalBackups(lastBackupTime: number, changes: number[][]): number[] {
    let needsBackUp = []
    for(let i=0;i < changes.length;i++){
        //if this change is greater than the latest backup time
        if(changes[i][0] > lastBackupTime && !needsBackUp.includes(changes[i][1])){
            needsBackUp.push(changes[i][1])
        }
    }
    return needsBackUp.sort((a, b) => a - b)

}

console.log(incrementalBackups(461620205, [[461620203, 1], 
    [461620204, 2], 
    [461620205, 6],
    [461620206, 5], 
    [461620207, 3], 
    [461620207, 5], 
    [461620208, 1]]));
