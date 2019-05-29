const palindromes = function(str) {
  str = str.toLowerCase();
  let regex = /\W/gi;
  str = str.replace(regex, '');
  for (let i in str){
    if (str[i] !== str[(str.length - 1) - i]) return false;
    if (+i > Math.floor(str.length / 2)) break;

  }
  return true;
}

module.exports = palindromes
