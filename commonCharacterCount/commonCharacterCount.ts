export function commonCharacterCount(s1: string, s2: string): number {
  let arr1 = s1.split("");
  let arr2 = s2.split("");
  let arr3 = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      //if the characters are the same
      if (arr1[i] === arr2[j]) {
        //push them into the array
        arr3.push(arr1[i]);
        //skip over to the next char at the top of the loop too
        i++;
      }
    }
  }
  return arr3.length;
}

console.log(commonCharacterCount("aabcc", "adcaa"));
