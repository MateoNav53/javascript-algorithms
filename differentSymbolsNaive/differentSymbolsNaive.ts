export function differentSymbolsNaive(s: string): number {
    //using an array, but using .includes means bad runtime for long strings
    // let charArr = s.split('')
    // let uniqueArr = []
    // for(let i=0;i < charArr.length;i++){
    //     //if the character isn't in our unique array
    //     if(!uniqueArr.includes(charArr[i])){
    //         //push it in there
    //         uniqueArr.push(charArr[i])
    //     }
    // }
    // return uniqueArr.length

    //using an object
    const uniqueChars = {}
    let charArr = s.split('')
    charArr.forEach((char) => {
        //add the character as a property and 1 as its value
        //by assigning its value as 1 it never adds duplicates. because new cases of the same char return 1 again
        uniqueChars[char] = 1
    })
    //Object.keys is an array of the objects keys. 
    return Object.keys(uniqueChars).length

    //using a set
    // const uniqueChars = new Set()
    // s.split('').forEach((i) => {
    //     uniqueChars.add(i)
    // })

    // return uniqueChars.size

}

console.log(differentSymbolsNaive('cabca'));
