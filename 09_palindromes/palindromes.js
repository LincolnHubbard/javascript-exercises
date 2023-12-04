const palindromes = function (input) {
   // let joined = input.join('');
   let cleanString = input.toLowerCase().replace(/[^a-z0-9]/g, "");
   let reversedString = cleanString.split("").reverse().join("");
   console.log(reversedString);
    if (cleanString === reversedString){
        return true;
    }
    else{
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
