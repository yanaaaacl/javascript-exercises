const number = Math.floor(Math.random() * 1000);
const repeatString = function (string, num) {
    let stringRepeat = '';
    if (num < 0){
        return 'ERROR';
    }
    for (let i = 0; i < num; i++) {
        if (string === ''){
            break;
        }
        stringRepeat += string;
    }
    
    return stringRepeat;
}
repeatString('', 10);
// Do not edit below this line
module.exports = repeatString;
