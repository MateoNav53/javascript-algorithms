export function flattenArray(arr: any[]): any[] {
    let finalArr = []
    
    flatten(arr)

    function flatten(arr){
        arr.forEach((i) => {
            if(Array.isArray(i)){
                console.log(i)
                //by calling this flatten function i guess we're going deeper into the nested array
                //so I guess we can call flatten to get deeper into an array
                flatten(i)
            }
            else {
                finalArr.push(i)
            }
        })
    }

    return finalArr
    
}

console.log(flattenArray([[["a"]], [["b"]]]));
console.log(flattenArray([1, [2], [3, [[4]]]]));
