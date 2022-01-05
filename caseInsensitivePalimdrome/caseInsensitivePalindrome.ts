export function isCaseInsensitivePalindrome(inputString: string): boolean {
    return inputString.toLocaleLowerCase() === inputString.toLowerCase().split('').reverse().join('')
}

console.log(isCaseInsensitivePalindrome('AaBaa'));
console.log(isCaseInsensitivePalindrome('abac'));