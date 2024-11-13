const sumAll = function(start, end) {
    let result = 0;
    // Check if both are more than or equal to 0
    if (start<0 || end<0) {
        return 'ERROR';
    }
    // Check if both are integers
    else if (start%Math.floor(start)>0 || end%Math.floor(end)>0) {
        return 'ERROR';
    }
    // Check if both are numbers
    else if (typeof start !== "number" || typeof end !== "number") {
        return 'ERROR';
    }
    // option 1 when `start` less or equal `end`
    else if (start <= end) {
        for (i=start; i<=end; i++) {
            result += i;
        }
    }
    // option 2 when `end` less than `start`
    else {
        for (i=end; i<=start; i++) {
            result += i;
        }
    }
    return result;
};

console.log(sumAll(2.5, 4));

// Do not edit below this line
module.exports = sumAll;

