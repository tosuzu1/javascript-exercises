const palindromes = function (word) {
    let processedWord = word.toLowerCase();
    processedWord= processedWord.replace(/[^a-z1-9]/gm, '');

    for (let i = 0; i < processedWord.length / 2; i+= 1) {
        if(processedWord[i] == processedWord[processedWord.length - i - 1]) {
            continue;
        }
        else {
            return false;
        }
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
