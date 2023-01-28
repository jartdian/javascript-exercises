const removeFromArray = function(arr, ...args) {
    for (let i = 0 ; i < args.length; i++) {
        if(arr.indexOf(args[i]) >= 0 ) {
            arr.splice(arr.indexOf(args[i]), 1)
        }
    }
    return arr
};

// Do not edit below this line
module.exports = removeFromArray;
