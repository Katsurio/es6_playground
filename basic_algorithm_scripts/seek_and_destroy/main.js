/*
    You will be provided with an initial array (the first argument in the
    destroyer function), followed by one or more arguments. Remove all elements
    from the initial array that are of the same value as these arguments.
*/
function destroyer1(arr) {
    // let args = Array.prototype.slice.call(arguments, 1);
    let args = Array.from(arguments).slice(1);
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < args.length; j++) {
            if (arr[i] === args[j]) {
                delete arr[i];
            }
        }
    }
    return arr.filter(Boolean);
}

function destroyer2(arr) {
    let args = Array.from(arguments).slice(1); //separates the arguments used for filtering into their own array of args using .from() and .slice()
    return arr.filter(function(val) {         //Return the filtered array, using includes() in the callback function to check if val is not in args;
        return !args.includes(val);          //returning true to keep the value in the original array or false to remove it.
    });
}

console.log(destroyer1([3, 5, 1, 2, 2], 2, 3, 5));