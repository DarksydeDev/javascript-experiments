if (!Object.create) {	
	Object.create = function (o) {
		if (arguments.length > 1) {
			throw new Error("Object.create only accepts 1 parameter");
		}
		function F() { }
		F.prototype = o;
		return new F();
	}
}

var person = {
	fname: 'Default',
	lname: 'Default',
	greet: function () {
		return 'Hi '+this.fname;
	}
}


var john = Object.create(person);
john.fname = 'John';
console.log(john.greet());