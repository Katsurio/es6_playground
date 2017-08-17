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