greet();

//just a function statement
function greet() {
	console.log('hi');
}


//an expression invoking/creating anonymous function
//results an object being created
var anonymousGreet = function() {
	console.log('hi');
}

function log(a) {
	// console.log(a);
	a();
}

// log(3);
// log("hello");
// log({
// 	country: 'test'
// });

log(function () {
	console.log('hi');
});