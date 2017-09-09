//using a function expression
var greetingFunc = function () {
	console.log('hello world!');
}


//Using Immediately Invoked Function Expression (IIFE)
var greeting = function (name) {
	console.log('hello world! ',name);
}('Sonny');


//IIFE that returns a value
var greetingVal = function function_name() {
	return 'hello world!';
}();


console.log(greetingVal);
// console.log(greeting);

//We wrap the function inside parenthesis since we want to run this on the fly and we don't want to give it a name. We normally use parenthesis when using an expression e.g. (1+2). Since javascript sees function the same as expression, it was accepted.
//also, we added () after function to use IIFE and finally run the function.
(function () {
	console.log('inside IIFE');
	console.log('hello wooorld');
}());