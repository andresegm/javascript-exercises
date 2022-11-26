const fibonacci = function(num) {
    if (num < 0) {
        return "OOPS"
    } 
    const numArr = [0, 1]   
    for (let i = 1; i < num; i++) {
        numArr.push((numArr[i] + numArr[i-1]))
    }
    return numArr[num]
};

console.log(fibonacci(20))
// Do not edit below this line
module.exports = fibonacci;
