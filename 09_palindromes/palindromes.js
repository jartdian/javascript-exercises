const palindromes = function (str) {
    let arrFromStr = [...str];
    let reversedArrFromStr = [...str].reverse()
    return arrFromStr.toString().toLowerCase().replace(/[^a-zA-Z0-9]/g,"") ==
    reversedArrFromStr.toString().toLowerCase().replace(/[^a-zA-Z0-9]/g,"")
};
// Do not edit below this line
module.exports = palindromes;
