let initial ={
  name: 'Initial',
  yearOfBirth: 1942,
  yearOfDeath: 1942,
}

let findTheOldest = function(arr) {
  let currentYear = new Date().getFullYear();
  console.log(currentYear, typeof currentYear);
  let oldest = arr.reduce(function(acc, x) {
    if (('yearOfDeath' in acc ? acc.yearOfDeath : currentYear) - acc.yearOfBirth < ('yearOfDeath' in x ? x.yearOfDeath : currentYear) - x.yearOfBirth) {
      console.log('true');
      acc = x;
    }
    return acc;
  }, initial);
  return oldest;
}

module.exports = findTheOldest
