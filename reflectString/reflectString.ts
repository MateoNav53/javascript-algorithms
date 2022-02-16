export function reflectString(inputString: string): string {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    const inputArr = inputString.split('')
    let reflectedString = ''
    for(let i=0;i < inputArr.length;i++){
        let reflectedIndex = Math.abs(alphabet.indexOf(inputArr[i]) - 25)
        reflectedString += alphabet[reflectedIndex]
    }

    return reflectedString

}

console.log(reflectString("name"));
