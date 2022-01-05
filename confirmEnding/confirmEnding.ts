export function confirmEnding(str: string, target: string) {
    //using endsWith()
    //return str.endsWith(target)

    //using substring
    //use target.length to get our first index for substring
    //use the total string length as our second index for substring
    //compare the substring to the target
    return str.substring(target.length - 1, str.length) === target
}

console.log(confirmEnding("Abstraction", "action"));
console.log(confirmEnding("Open sesame", "pen"));