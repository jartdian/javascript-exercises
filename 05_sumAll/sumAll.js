const sumAll = function(firstNum,secondNum) {
    if(Number.isInteger(firstNum) && Number.isInteger(secondNum)) {
        if (firstNum >= 0 && secondNum >= 0) {
            max = Math.max(firstNum,secondNum);
            min = Math.min(firstNum,secondNum);
            let rangeArray = Array.from({length: (max - min) + 1 },(_, i) => min + i)
            result = 0;
            for(let i = 0; i < rangeArray.length; i++) {
                result += rangeArray[i]
            }
            return result
        }
    } return "ERROR"
};
// Do not edit below this line
module.exports = sumAll;
