/*  Write a function that splits an array (first argument) into
    groups the length of size (second argument) and returns them
    as a two-dimensional array.
*/
function chunkArrayInGroups(arr, size) {
    let output = [];
    return pushArrChunks(arr, size, output);
}

function pushArrChunks (arr, size, outputArr) {
    while (arr.length > 0) {
        outputArr.push(arr.splice(0, size || 1));
    }
    return outputArr;
}

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2));