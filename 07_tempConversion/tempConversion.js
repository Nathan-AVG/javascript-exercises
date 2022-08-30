const ftoc = function(temp) {
  let newtemp = 0;
  newtemp = (temp - 32) * 5 / 9;
  newtemp = Math.round(newtemp * 10) / 10
  console.log(newtemp);
};

const ctof = function(temp) {
  let newtemp = 0;
  newtemp = temp * 9/5 + 32
  newtemp = Math.round(newtemp * 10) / 10
  console.log(newtemp);
};

ftoc(80);

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
