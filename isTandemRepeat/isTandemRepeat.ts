export function isTandemRepeat(inputString: string): boolean {
    if(inputString.length % 2 === 0){
        let midIndex = Math.floor(inputString.length / 2)
        let firstHalf = inputString.split('').slice(0, midIndex).join('')
        let secondHalf = inputString.split('').slice(midIndex).join('')
        return firstHalf === secondHalf
    }
    return false
    
}

console.log(isTandemRepeat('tandemtandem'))
console.log(isTandemRepeat('qqq'))
console.log(isTandemRepeat('2w2ww'))
