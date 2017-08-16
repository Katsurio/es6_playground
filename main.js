// let stringFunctor = (value, fn) => {
//     let chars = value.split("");
//     return chars.map(function(char) {
//         return String.fromCharCode(fn(char.charCodeAt(0)));
//     }).join("");
// };
//
// let plus1 = (value) => value + 1;
// let minus1 = (value) => value - 1;
//
// console.log(stringFunctor("ABC", plus1));
// console.log(stringFunctor("XYZ", minus1));

/*Note
You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols)
and turn everything lower case in order to check for palindromes.*/

let palindrome = (str) => {
    let cleanedStr = str.toLowerCase().trim().replace(/[\W_]+/g, '');
    let reversedStr = cleanedReversedStr(str);
    return cleanedStr === reversedStr;
};
let cleanedReversedStr = (strs) => {
    return newWord =
        strs
            .toLowerCase()
            .trim()
            .replace(/[\W_]+/g, '')
            .split('')
            .reverse()
            .join('');
};