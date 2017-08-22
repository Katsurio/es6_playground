/*  Return the remaining elements of an array after chopping off n
    elements from the head.
    The head means the beginning of the array, or the zeroth index.
*/
function spliceSlasher(arr, howMany) {
    arr.splice(0, howMany);
    return arr;
}
console.log(spliceSlasher([1, 2, 3], 2));


// Refactored using slice()
function sliceSlasher(arr, howMany) {
    return arr.slice(howMany);
}
console.log(sliceSlasher([1, 2, 3], 2));