const reverseString = function(str) {
    let arr = str.split('');
    let arrRev = arr.reverse();
    let strRev = arrRev.join('');
    return strRev;
};

// Do not edit below this line
module.exports = reverseString;
