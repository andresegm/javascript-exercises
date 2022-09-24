const sumAll = (int1, int2) => {
    if (typeof(int1) !== 'number' || typeof(int2) !== 'number')  {
      return 'ERROR';
    } else if (int1 < 0 || int2 < 0) {
        return 'ERROR';
    }
    let arr = [];
    let sum = 0;
    if (int2 > int1) {
      arr = [int1, int2] ;
    } else {
      arr = [int2, int1];
    }
    for (let i = arr[0]; i <= arr[1]; i++) {
      sum += i;
    }
    return sum;
  }
  

// Do not edit below this line
module.exports = sumAll;
