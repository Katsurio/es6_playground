/*
    One of the simplest and most widely known ciphers is a Caesar cipher,
    also known as a shift cipher. In a shift cipher the meanings of the
    letters are shifted by some set amount.

    A common modern use is the ROT13 cipher, where the values of the letters
    are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

    Write a function which takes a ROT13 encoded string as input and
    returns a decoded string.

    All letters will be uppercase. Do not transform any non-alphabetic
    character (i.e. spaces, punctuation), but do pass them on.

    A = 65
    Z = 90
    a = 97
    z = 122

*/

function rot13(str) {
    let strArr = str.split(/[ ,]+/);
    let output = [];
    for (let i = 0; i < strArr.length; i++) {
        let tempArr = [];
        let word = strArr[i];
        for (let j = 0; j < word.length; j++) {
            let letterChar = word.charCodeAt(j);
            if (letterChar >= 65 && letterChar <= 90 || letterChar >= 97 && letterChar <= 122) {
                if (letterChar < 78) {
                    tempArr.push(String.fromCharCode(letterChar + 13));

                } else if (letterChar === 78) {
                    tempArr.push(String.fromCharCode(65));
                } else if (letterChar === 110) {
                    tempArr.push(String.fromCharCode(97));
                }
                else {
                    tempArr.push(String.fromCharCode(letterChar - 13));
                }
            } else {
                tempArr.push(String.fromCharCode(letterChar));
            }
        }
        output.push(tempArr.join(''));
    }
    return output.join(' ');
}

console.log(rot13("Holy Jesus, Batman!!!"));

function rot13(str) {
    // Split str into a character array
    return str.split('')
    // Iterate over each character in the array
        .map.call(str, function(char) {
            // Convert char to a character code
            x = char.charCodeAt(0);
            // Checks if character lies between A-Z
            if (x < 65 || x > 90) {
                return String.fromCharCode(x);  // Return un-converted character
            }
            //N = ASCII 78, if the character code is less than 78, shift forward 13 places
            else if (x < 78) {
                return String.fromCharCode(x + 13);
            }
            // Otherwise shift the character 13 places backward
            return String.fromCharCode(x - 13);
        }).join('');  // Rejoin the array into a string
}
