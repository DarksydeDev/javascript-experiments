function Person(fname, lname) {
	this.fname = fname;
	this.lname=lname;
}
Person.prototype.getFullName = function() {
	return this.fname+' '+this.lname;
};


var john = new Person('John', 'Doe'); //same as `var a = {}`. Creates new object
console.log(john);

var jane = new Person('Jane', 'Doe');
console.log(jane);
