// let findLongestWord = (str = '') => {
//     let strsArr = str.split(' ');
//     for (let i = 0; i < strsArr.length - 1; i++) {
//         let indexPlus1 = i + 1;
//         if (strsArr[i].length < strsArr[indexPlus1].length) {
//             let temp = strsArr[i];
//             strsArr[i] = strsArr[indexPlus1];
//             strsArr[i + 1] = temp;
//             i = -1;
//         }
//     }
//     return console.log(strsArr[0].length);
// };
//
findLongest('superman would get his ass beat down by batman if it\'s not affleck');


// Refactored with .reduce() and Math.max()
function findLongest(str)
{
    return str.split(' ')
        .reduce(function (total, val) {
            return Math.max(total, val.length);
            }, 0);
}