export function convertString(s: string, t: string): boolean {
    let firstWord = s.split('');
    let secondWord = t.split('');
    let string = ""
    let tIndex = 0
    for(let i=0;i < firstWord.length;i++){
        if(firstWord[i] === secondWord[tIndex]){
            string += firstWord[i]
            tIndex++
        }
    }
    return string === t;
}

console.log(convertString('ceoydefthf5iyg5h5yts', 'codefights'));
console.log(convertString('addbyca', 'abcd'));
