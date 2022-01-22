export function launchSequenceChecker(systemNames: string[], stepNumbers: number[]): boolean {
    const launchCodes = {}
    for(let i=0;i <= systemNames.length;i++){
        console.log(launchCodes)
        //if the current iteration of systemNames is already in our obj
        if(launchCodes.hasOwnProperty(systemNames[i])){
            //if our obj of this iteration is already greater than or equal to the iteration in stepnumbers
            if(launchCodes[systemNames[i]] >= stepNumbers[i]){
                //if it is, return false. the current value in the obj isn't going to increment since it's already larger
                return false
            }
            //if it isn't greater, set the value of that property to the current iteration of the step numbers array.
            //that means it's incrementing
            launchCodes[systemNames[i]] = stepNumbers[i]
        } else {
            launchCodes[systemNames[i]] = stepNumbers[i]
        }
    }
    return true
}

//this returns true b/c everything is incrementing properly
console.log(launchSequenceChecker(["stage_1", "stage_2", "dragon", "stage_1", "stage_2", "dragon"], [1, 10, 11, 2, 12, 111]));

//this return false b/c it checked if the object had stage_1 as a property, it did,
//and the corresponded value in the other array was lower, 1
console.log(launchSequenceChecker(["stage_1", "stage_1", "stage_2", "dragon"], [2, 1, 12, 111]));