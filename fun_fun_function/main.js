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


// let orders = [
//     { amount: 250 },
//     { amount: 400 },
//     { amount: 100 },
//     { amount: 325 }
// ];
//
// let amount = orders.reduce(function(total, order) { return total + order.amount;}, 0);
//  console.warn(amount);
//
// let amount = orders.reduce(((total, order) => total + order.amount), 0);

