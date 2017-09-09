function buildFunctions() {
	
	var arr = [];

	//all functions returns a value of `3` since the loops is just creating a function. Unless you're using IIFEs to invoke a function.
	for (var i = 0; i < 3; i++) {
		arr.push(function () {
			console.log(i);
		});
	}

	return arr;
}

function buildFunctions2() {
	
	var arr = [];

	for (var i = 0; i < 3; i++) {
		arr.push(
			(function (j) {
				return function () {
					console.log(j);
				}
			}(i))
		);
	}

	return arr;
}


var fs = buildFunctions();
for (var i = 0; i < fs.length; i++) {
	fs[i]();
}
