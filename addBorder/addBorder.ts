export function addBorder(picture: string[]): string[] {
    
    //Solution 1
    
    let newArr = picture.map((i) => '*' + i + '*')
    let itemLength = newArr[0].length
    let char = '*'
    const border = char.repeat(itemLength)
    newArr.push(border)
    newArr.unshift(border)
    return newArr

    //Solution 2 from Dylan
    // const wall = '*'.repeat(picture[0].length + 2)
    // picture.unshift(wall)
    // picture.push(wall)

    // for(let i=1;i < picture.length;i++){
    //     picture[i] = '*'.concat(picture[i], '*')
    // }

    // return picture
}

console.log(addBorder(["abc", "ded"]));