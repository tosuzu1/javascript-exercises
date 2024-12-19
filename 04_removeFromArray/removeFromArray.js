const removeFromArray = function(arg) {
    let newArray = arguments[0];

    for (var i = 1; i < arguments.length; i++) {
        newArray = newArray.filter((val) => val !== arguments[i] );
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
