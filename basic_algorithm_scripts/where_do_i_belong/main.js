/*
    Return the lowest index at which a value (second argument) should be inserted into
    an array (first argument) once it has been sorted. The returned value should be a number.

    For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1
    (index 0), but less than 2 (index 1).

    Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted
    it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).
*/

function getIndexToIns1(arr, num) {
    arr.sort(function (a, b) {
        return a - b;
    });
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= num) {
            return i;
        }
    }
    return arr.length;
}
console.log(getIndexToIns1([2, 5, 10], 15));



function getIndexToIns2(arr, num) {
    arr.push(num);
    arr.sort(function (a, b) {return a - b;});
    return arr.indexOf(num);
}
console.log(getIndexToIns2([2, 5, 10], 15));



function getIndexToIns3(arr, num) {
    return arr.concat(num).sort((a, b) => a - b).indexOf(num);
}
console.log(getIndexToIns3([2, 5, 10], 15));