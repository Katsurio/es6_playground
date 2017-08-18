/* Check if a string (first argument, str) ends with the given target string (second argument,
target).
This challenge can be solved with the .endsWith() method, which was introduced in ES2015.
But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.
*/

function confirmEnding(str, target) {
    let splitStr = str.split(' ');
    let lengthMinus1 = (splitStr.length) - 1;
    let word = splitStr.length > 1 ? splitStr[lengthMinus1] : str;
    return (word.substr(-target.length) === target);
}

console.log(confirmEnding("Connor", "n"));

/*
function with 2 prams (str, match)
      split string
      conditional
        check last val against match


The includes() method determines whether one string
may be found within another string, returning true or
false as appropriate.
*/