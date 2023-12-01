const removeFromArray = function(input, ...args) {
    const output = [];

    input.forEach((index) => {
        if (!args.includes(index)){
            output.push(index);
        }
    })

    return output;
};

// Do not edit below this line
module.exports = removeFromArray;
