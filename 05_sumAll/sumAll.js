const sumAll = function(x, y) {
    if(!Number.isInteger(x) || !Number.isInteger(y) ) return "ERROR";
    else if (x < 0 || y < 0) return "ERROR";

    largerInt = Math.max(x,y);
    smallInt = Math.min(x,y);

    result = 0;
    for(let i = smallInt ; i <= largerInt; i+=1) {
        result += i;
    }
    return result;

};

// Do not edit below this line
module.exports = sumAll;
