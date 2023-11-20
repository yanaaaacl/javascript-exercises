const add = function (num1, num2) {
  let obj1 = {
    num1: num1,
    num2: num2,
  }
  return obj1['num1'] + obj1['num2'];
};
add(2, 2);


const subtract = function (num3, num4) {
  let obj2 = {
    num3: num3,
    num4: num4,
  }
  return obj2['num3'] - obj2['num4'];
};
subtract(10, 4);

const sum = function (num5) {
  if (num5 === undefined || num5.length == 0) {
    return 0;
  } else if (num5.length == 1) {
    return num5[0];
  } else {
    let counter = 0;
    for (let key of num5) {
      counter += key;
    }
    return counter;
  }
};
sum([1, 3, 5, 7, 9]);
const multiply = function (num6) {
  let prod = 1;
  for (let key of num6) {
    prod *= key;
  }
  return prod;
};
multiply([2, 4]);
const power = function (num7, num8) {
  return Math.pow(num7, num8);
};
power(4, 3);
const factorial = function (num9) {
  if (num9 === 0) {
    return 1;
  } else {
    let prod = 1;
    for (let i = 1; i <= num9; i++) {
      prod *= i;
    }
    return prod;
  }
};
factorial(1);

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
