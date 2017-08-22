/*
    Return true if the string in the first element of the array contains
    all of the letters of the string in the second element of the array.

    For example, ["hello", "Hello"], should return true because all of the
    letters in the second string are present in the first, ignoring case.

    The arguments ["hello", "hey"] should return false because the string
    "hello" does not contain a "y".

    Lastly, ["Alien", "line"], should return true because all of the
    letters in "line" are present in "Alien".
*/

function mutation1(arr) {
    let needle = arr[1].toLowerCase();
    let haystack = arr[0].toLowerCase();
    for (let i = 0; i < needle.length; i++) {
        if (haystack.indexOf(needle[i]) === -1) {
            return false;
        }
    }
    return true;
}
console.log(mutation1(["hello", "hey"]));

/*
    (x) This didn't work with .map() b/c it returns a new obj[].
    (✓) Had to use .every() b/c it returns a boolean.
    (x) Can't use .forEach() b/c it doesn't return anything.
*/
function mutation2(arr) {
    return arr[1].toLowerCase()
        .split('')
        .every(function (letter) {
            return arr[0].toLowerCase()
                .indexOf(letter) !== -1;
        });
}

console.log(mutation2(["hello", "hey"]));