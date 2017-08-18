// function repeatStringNumTimes(str, num) {
//     let output = [];
//     for(let i = num; i > 0; i--) {
//         output.push(str + "");
//     }
//     return output.join('');
// }

// Refactored
function repeatStringNumTimes(str, num) {
    return num <= 0 ? '' : str.repeat(num);
}

console.log(repeatStringNumTimes("abc", 23));