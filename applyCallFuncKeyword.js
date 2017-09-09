var person = {
	firstname: 'John',
	lastname: 'Doe',
	getFullName: function () {
		var fullname = this.firstname + ' ' + this.lastname;

		return fullname;
	}
}

var logName = function (lang1, lang2) {
	console.log('Logged: '+this.getFullName());
	console.log('Arguments: '+lang1+' '+lang2);
	console.log('------------------');
}


var logPersonName = logName.bind(person); //creates a copy of a person inside logName function but doesn't execute the function on the fly.

logPersonName('en');


logName.call(person, 'en', 'es'); //call creates a copy of a person variable inside logName function AND executes it.
logName.apply(person, ['en', 'es']); //apply is basically the same as call but only using array as parameteres.


(function (lang1, lang2) {
	console.log('Logged: '+this.getFullName());
	console.log('Arguments: '+lang1+' '+lang2);
	console.log('------------------');
}).apply(person, ['en', 'es']);


//function borrowing

var person2 = {
	firstname: 'Jane',
	lastname: 'Doeee'
};


console.log(person.getFullName.apply(person2));




