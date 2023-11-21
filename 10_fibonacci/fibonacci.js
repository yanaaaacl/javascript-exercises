const fibonacci = function (n) {
    n = Number(n);
    let fib1 = 1;//2
    let fib2 = 1;//2
    let fib_sum;
    if (n < 0) {
        return "OOPS";
    } else {
        for (let i = 0; i < n - 2; i++) {
            fib_sum = fib1 + fib2; //2, 3
            fib1 = fib2;//1, 2
            fib2 = fib_sum;//2, 3
        }
    }

    return fib2;
};

// Do not edit below this line
module.exports = fibonacci;
