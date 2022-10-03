const add = function(...nums) {
	let sum = 0;
  for (let i = 0; i < nums.length; i++) {
     sum += nums[i];
  }
  return sum
};


const subtract = function(...nums) {
  let sub = nums[0];
  for (let i = 1; i < nums.length; i++) {
     sub -= nums[i];
  }
  return sub
};

const sum = function(...nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (Array.isArray(nums[i])) {
      for (let j = 0; j < nums[i].length; j++) {
      sum += nums[i][j];
      }
    } else {
     sum += nums[i];
    }
  }
  return sum
};

const multiply = function(...nums) {
  let product = 1;
   for (let i = 0; i < nums.length; i++) {
    if (Array.isArray(nums[i])) {
      for (let j = 0; j < nums[i].length; j++) {
      product *= nums[i][j];
      }
    } else {
     product *= nums[i];
    }
  }
  return product
};

const power = function(num, exp) {
  let product = num;
  for (let i = 1; i < exp; i++) {
    product *= num;  
  }
  return product
};

const factorial = function(num) {
  if (num === 0) {return 1};
  let product = num;
  for (let i = num -1; i > 0; i--) {
    product *= i;
  }
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
