function add (a, b) {
	return a + b;
}

function subtract (a, b) {
	return a - b;
}

function sum (arr) {
	return arr.reduce((sum, x) => sum += x, 0);
}

function multiply (arr) {
	return arr.reduce((product, x) => product *= x);
}

function power(a, b) {
	return a**b;
}

function factorial(a) {
	let factorial = 1;
	if (a === 0){
		return 1;
	} else {
		for(;a>1;a--){
			factorial *= a;
		}
		return factorial;
	}

}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}
