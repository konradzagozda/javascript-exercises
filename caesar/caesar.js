const caesar = function(str, shift) {
  str = [...str];
  let regex = /\W/g;
  str = str.map(function(x,i) {
    if (x.search(regex) === 0) {
      return x;
    } else {
      return String.fromCharCode(x.charCodeAt(0) + shift);
    }

  });
  return str.join('');
}

module.exports = caesar
