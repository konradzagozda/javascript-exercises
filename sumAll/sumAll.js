const sumAll = function(a, b) {
  sum = 0;
  if (a > b){
    let c = b;
    b = a;
    a = c;
  }
  if (a < 0 || b < 0) {
    return "ERROR";
  }
  if (!(typeof a === 'number' && typeof b === 'number')) {
    return "ERROR";
  }
  while (a <= b) {
    sum += a;
    a++;
  }
  return sum;
}

module.exports = sumAll
