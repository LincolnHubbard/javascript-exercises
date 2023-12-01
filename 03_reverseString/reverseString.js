const reverseString = function(input) {

    let charArray = input.split('');
    charArray = charArray.reverse();
    let output = charArray.join('');

    // for (let i = 1; i < input.length; i++){
    //     // charBuffer = input.slice(-i);
    //     output += charArray[-i];
    // }

    return output;
};

// Do not edit below this line
module.exports = reverseString;
