const getTheTitles = function(dict) {
    let result = new Array();
    for (let i = 0; i < dict.length; i += 1) {
        result.push(dict[i]["title"]);
    }

    return result;

};

// Do not edit below this line
module.exports = getTheTitles;
