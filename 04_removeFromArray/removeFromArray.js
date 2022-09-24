const removeFromArray = (arr, ...els) => {
  for (let i = 0; i < els.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (els[i] === arr[j]) {
        arr.push(arr.splice(arr.indexOf(arr[j]), 1)[0]); //pushes the matched element to the end of the arr array
        arr.pop(); //removes the last element of the array
      }
    }
  }
  return arr;
}

// Do not edit below this line
module.exports = removeFromArray;
