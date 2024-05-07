const convertToCelsius = function(temp) {
  temp = (temp - 32) * 5/9;
  Math.round(temp).toFixed(1);
  return Number(temp.toFixed(1));
};

const convertToFahrenheit = function(temp) {
  temp = (temp * 9/5 + 32);
  Math.round(temp).toFixed(1);
  return Number(temp.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
