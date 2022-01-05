export function alphabeticShift(inputString: string): string {
    //Solution 1
    let codes = inputString.toLowerCase().split('').map((item, index) => {
        if(item === 'z' || item === 'Z'){
            return 97
        } else {
            return inputString.charCodeAt(index) + 1
        }
        
    })
    return codes.map((i) => String.fromCharCode(i)).join('')
    
}

console.log(alphabeticShift('crazy'));