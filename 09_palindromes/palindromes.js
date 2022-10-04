const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v','w', 'x', 'y', 'z']
const palindromes = function (arg) {
    let newArr1 = [];
    let newArr2 = [];
    let placeHolder = arg
    if (Array.isArray(placeHolder) === true) {
      placeHolder = placeHolder.toString();
      placeHolder = placeHolder.split('');
    } else if (typeof placeHolder === 'string') {
      placeHolder = placeHolder.split('');
    }
    for (let i = 0; i < placeHolder.length; i++) {
      for (let j = 0; j < letters.length; j++) {
        if (placeHolder[i] === letters[j]) {
          newArr1.unshift(placeHolder[i]);
          newArr2.push(placeHolder[i]);
        }
      }
    }
    newArr1 = newArr1.toString().toLowerCase();
    newArr2 = newArr2.toString().toLowerCase();
    if (newArr1 === newArr2) {
      return true;
    } else {
      return false;
    }
};


// Do not edit below this line
module.exports = palindromes;
