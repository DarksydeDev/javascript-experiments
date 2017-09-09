var person = {
	fname: 'Default',
	lname: 'Default',
	getFullName: function () {
		return this.fname + ' ' + this.lname
	}
}


var john = {
	fname: 'John',
	lname: 'Doe'
}
var jane = {
	fname: 'Jane',
	lname: 'Doe'
}

/***danger: Don't do this EVER! This slows the performance down***/
john.__proto__ = person;
jane.__proto__ = john;
/***END***/

//gets all parent and children prototypes for display
function getAllPrototypes(objPerson) {
	if (objPerson != Object.prototype) {
		var parentPrototype = Object.getPrototypeOf(objPerson);
		console.log(objPerson.getFullName());
		getAllPrototypes(parentPrototype);
	}
}

console.log('Parent inheritance:')
getAllPrototypes(jane);
