const reverseString = function (str) {
    let arr = str.split('');
    let replayStr = '';
  while (arr.length) {
        replayStr += arr.pop();
    }
    return replayStr;
};

reverseString('');

// Do not edit below this line
module.exports = reverseString;
