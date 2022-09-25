const ftoc = function(tempF) {
  let celsius = Math.round(((tempF - 32) * 5/9)*10)/10;
  return celsius;
};

const ctof = function(tempC) {
  let fahrenheit = Math.round(((tempC * 9/5) + 32)*10)/10;
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
