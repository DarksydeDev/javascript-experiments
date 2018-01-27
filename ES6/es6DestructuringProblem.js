const numbers = [1, 2, 3];

function double([x, ...rest], res=[]) {
	if (rest.length > 0) {
	    return double(rest, res.concat(x*2));
	} else {
		res = res.concat(x*2);
	}

	return res;
}

console.log(double(numbers));