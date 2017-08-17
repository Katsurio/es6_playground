// TODO: Convert to ES6 coze dis be oogly mon

function factorialize(num) {
    if(num === 0) {
        return 1;
    }
    var tempArr = [];
    var i = 0,
        k = 0;
    tempVal = 0;
    for (i; i <= num; i++) {
        tempArr.push(i);
    }
    for (k = tempArr.length - 1; k >= 2; k--) {
        tempVal = tempArr[k] * tempArr[k - 1];
        tempArr.splice(-2, 2, tempVal);
        k = tempArr.length;
    }
    num = tempArr[1];
    return num;
}
factorialize(0);