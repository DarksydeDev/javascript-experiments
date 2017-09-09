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

/***danger: Don't do this EVER! This slows the performance down***/
john.__proto__ = person;


for (var prop in john) {

	if (john.hasOwnProperty(prop)) {
		console.log(prop+': '+john[prop]);
	}
}

var jane = {
	address: '111 Main St.',
	getFormalFullName: function () {
		return this.lname + ' ' + this.fname;
	}
}

var jim = {
	getFirstName: function () {
		return fname;
	}
}

