const fibonacci = function(x) {
  x = +x;
  if (x < 1) {
    return 'OOPS';
  }
  if (x === 1 || x === 2) {
    return 1;
  } else {
    return fibonacci(x-1) + fibonacci(x-2);
  }
}

module.exports = fibonacci
