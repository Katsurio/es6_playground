let stringFunctor = (value, fn) => {
    let chars = value.split("");
    return chars.map(function(char) {
        return String.fromCharCode(fn(char.charCodeAt(0)));
    }).join("");
};

let plus1 = (value) => value + 1;
let minus1 = (value) => value - 1;

console.log(stringFunctor("ABC", plus1));
console.log(stringFunctor("XYZ", minus1));
