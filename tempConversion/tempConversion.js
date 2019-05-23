
//fahrenheit to celsius
const ftoc = function(num) {
  return +((num - 32)*5/9).toFixed(1);
}

//celsius to fahrenheit
const ctof = function(num) {
  return +(num * 9/5 +32).toFixed(1);
}

module.exports = {
  ftoc,
  ctof
}
