const removeFromArray = function (arr, num1, num2, num3, num4) {
    let arrCopy = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num1) {
            continue;
        } else if (arr[i] === num2) {
            continue;
        } else if (arr[i] === num3) {
            continue;
        } else if (arr[i] === num4) {
            continue;
        } else {
            arrCopy.push(arr[i]);
        }
    }
    return arrCopy;
};
removeFromArray([1, 2, 3], "1", 3);

// Do not edit below this line
module.exports = removeFromArray;
