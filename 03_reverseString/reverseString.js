const reverseString = function(word) {
    let result = '';
    let counter = word.length-1;
    for (i=0; i<word.length; i++) {
        result += word[counter];
        counter -= 1;
    }
    return result;
};

// Do not edit below this line
module.exports = reverseString;
