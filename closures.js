function greet(say) {
	//this return function used 'say' variable as a reference in an outer lexical scope/environment.
	return function (name) {
		console.log(say + ' ' + name);
	}
}

var sayHi = greet('hi');

//`say` variable should not exist in a current execution context anymore(which is the returned function). But because of `Closure`, it's possible.
//Closure is a feature of javascript engine. As long as the variables is within the scope, any function can use it even though the current execution context where that variable lives(`say` variable) is no longer active.
sayHi('Sonny');