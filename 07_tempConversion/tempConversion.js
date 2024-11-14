const convertToCelsius = function(tempF) {
  let tempC = (tempF - 32) * (5/9);
  if (Math.floor(tempC)==0) return tempC;
  else return tempC.toFixed(1)*1.0;
};

const convertToFahrenheit = function(tempC) {
  let tempF = (tempC * 9/5) + 32;
  if (Math.floor(tempF)==0) return tempF;
  else return tempF.toFixed(1)*1.0;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
