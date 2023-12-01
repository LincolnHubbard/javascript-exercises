const sumAll = function(start, end) {
    
    if (start < 0 || end < 0 || !Number.isInteger(start) || 
        !Number.isInteger(end)){
        return "ERROR";
    }
    let count = 0;
    if (start > end){
        for (let i = start; i >= end; i--){
            count += i;
        }
    }
    else{
        for (let i = start; i <= end; i++){
            count += i;
        }
    }
    return count;
};

// Do not edit below this line
module.exports = sumAll;
