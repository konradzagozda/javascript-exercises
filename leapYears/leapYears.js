const leapYears = function(num) {
  if (num % 4 === 0){
    if (num % 100 === 0){
      if (num % 400 === 0) return true;
      else return false;
    }
    return true;
  } else return false;
}

module.exports = leapYears
