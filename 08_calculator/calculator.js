const add = function(input1, input2) {
	return input1 + input2;
};

const subtract = function(input1, input2) {
  return input1 - input2;
};

const sum = function(nums) {
  return nums.reduce((total, currentValue) => total + currentValue, 0)
};

const multiply = function(nums) {
  return nums.reduce((total, currentValue) => total * currentValue)
};

const power = function(input1, input2) {
  return Math.pow(input1, input2)
	
};

const factorial = function(input) {
  let result = 1;
  if (input === 0 || input === 1){
    return 1;
  }
  else{
    for (let i = input; i > 0; i--){
      result = result * i;
    }
    return result;
  }
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
