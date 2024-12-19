const findTheOldest = function(peopleArr) {
    let result = "";
    let oldest = 0;

    const d = new Date();
    let year = d.getFullYear();

    for (let i = 0; i < peopleArr.length; i += 1) {
        let deathYear = 0;
        if ('yearOfDeath' in peopleArr[i]) {
            deathYear = peopleArr[i]['yearOfDeath'];
        }
        else {
            deathYear = year;
        }
        
        let age = deathYear - peopleArr[i]['yearOfBirth']; 

        if(age > oldest) {
            oldest = age;
            result = peopleArr[i];
        }
    }

    return result;
};

// Do not edit below this line
module.exports = findTheOldest;
