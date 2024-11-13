const removeFromArray = function() {
    let originalArray = arguments[0]
    for (i=1; i<arguments.length; i++) {
        let toRemove = arguments[i];
        originalArray = originalArray.filter(element => element !== toRemove);
    }
    return originalArray;
};

// Do not edit below this line
module.exports = removeFromArray;
