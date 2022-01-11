export function firstDuplicate(a: number[]): number {
    //nested for loop
    // let minIndex = -1
    // for(let i=0;i < a.length;i++){
    //     for(let j=i + 1;j < a.length;j++){
    //         //if it's a duplicate
    //         if(a[i] === a[j]){
    //             //assign j to the minIndex variable
    //             minIndex = j
    //         }
    //     }
    // }
    // return minIndex === -1 ? minIndex : a[minIndex]

    //using objects
    const obj = {}

    for(let num of a){
        //if the object already has the number
        if(obj.hasOwnProperty(num)){
            //return that number
            return num
        //otherwise, set the 
        } else {
            //assign that number as the property and value
            obj[num] = num
        }
    }

    return -1
    
}
//find the first duplicate number for which the second occurrence has the minimal index
console.log(firstDuplicate([2, 1, 3, 5, 3, 2]));
console.log(firstDuplicate([2, 4, 3, 5, 1]));
