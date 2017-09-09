

//function currying
function multiply(a, b) {
	return a * b;
}


//bind keyword takes a parameter and sets a value permanently.
var multipleByTwo = multiply.bind(this, 2);
console.log(multipleByTwo(5));

var multipleByThree = multiply.bind(this, 3);
console.log(multipleByThree(5));