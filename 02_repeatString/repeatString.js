const repeatString = function(word, val) {
    if (val < 0) {
        return "ERROR";
    }

    let result = "";
    for (let i = 0; i < val; i ++) {
        result += word;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
