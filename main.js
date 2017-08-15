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

// let palindrome = (str, fn) => {
//
//     let cleanedStrArr =
//         str
//             .replace(/[^!-\/:-@\[-`{-~]/gi, function(str) {
//                 return uncap(str);
//             }).split('');
//
//     let reverseStrArr = cleanedStrArr.reverse();
//
//     return compareLetters(cleanedStrArr, reverseStrArr);
// };
//
let uncap = (word) => word.toLowerCase();
// let compareLetters = (arr1, arr2) => arr1 === arr2;
// console.log(palindrome("nope"));

let cleanThis = (str) => {
    let newWord =
        str
            .trim()
            .replace(/[^\w\S]/gi, function (str) {
                return uncap(str);
            }).split('');
    return console.log(newWord);
};
cleanThis("1 EYE for of 1 eye.");