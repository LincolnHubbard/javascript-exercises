const fibonacci = function(n) {
    if (n < 0){
        return "OOPS";
    }
    if (n === 0){
        return 0;
    }

    let num1 = 1;
    let num2 = 0;
    let index = 2;

    while (index <= n){
        let current = num1 + num2;
        num2 = num1;
        num1 = current;
        index++;
    }

    return num1;
};

// Do not edit below this line
module.exports = fibonacci;
