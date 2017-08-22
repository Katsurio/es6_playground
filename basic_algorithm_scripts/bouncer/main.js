/*
    Remove all falsy values from an array.

    Falsy values in JavaScript are false,

    null, 0, "", undefined, and NaN.
*/

function bouncer1(arr) {
    return arr.filter(function(index) {
        return Boolean(index) !== false;
    });
}


function bouncer2(arr) {
    return arr.filter(Boolean);
}

console.log(bouncer2([7, "ate", "", false, 9]));