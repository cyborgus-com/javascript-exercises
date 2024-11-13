const removeFromArray = function() {
    // for (let i = 1; i<arguments.length; i++) {
    //     let ixOfElement = indexList.indexOf(arguments[i])
    //     indexList.splice(ixOfElement, 1);
    // }
    // return indexList;
    let originalArray = arguments[0]
    for (i=1; i<arguments.length; i++) {
        let toRemove = arguments[i];
        originalArray = originalArray.filter(element => element !== toRemove);
    }
    return originalArray;
};

let result = removeFromArray(["yo",2,2,3,4], "yo", 1, "2");
console.log(result);