export function houseOfCats(legs: number): number[] {
    const peopleArr: number[] = []
    if(legs === 2){
        return [1]
    }
    //set up a while loop for while legs are greater than 0
    while(legs > 0){
        console.log(peopleArr)
        console.log(legs)
        //add the total number of legs divided by 2 to the front of the array using unshift
        peopleArr.unshift(legs / 2)
        console.log(peopleArr)
        //take 4 away from the total, which represents taking the amount of a cat's legs out
        legs -= 4
        //after we decrement, it goes back to the top
        //we now get a new leg total which represents if a cat was in our leg total
        //therefore we count the new possible amount of human legs, which is legs - 4
        console.log(legs)

    }

    return peopleArr
}

console.log(houseOfCats(10));
// console.log(houseOfCats(2));
