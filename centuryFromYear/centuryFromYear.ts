export function centuryFromYear(year: number): number {
    
    //Solution 1 without year ending in 00 edge case
    // const yearArr = year.toString().split('')
    // return yearArr.length < 3 ? 1
    // : yearArr.length < 4 ? parseInt(yearArr[0]) + 1
    // : parseInt(yearArr.slice(0, 2).join('')) + 1

    //Solution 2 with year ending in 00 edge case
    const century = year / 100
    if(year % 100 === 0){
        return century
    }

    return Math.floor(century) + 1

}

console.log(centuryFromYear(1905));
console.log(centuryFromYear(1700));