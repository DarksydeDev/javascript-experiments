/***Before ES6***/

//This is considered as constructor
// function Car(options) {
// 	this.title = options.title;
// 	console.log('Car constructor')
// }

// Car.prototype.drive = function() {
// 	return 'vroom';
// };
// Car.prototype.getConstructor = function(options) {
// 	return new this.constructor(options);
// };

//This is considered as constructor though.
// function Toyota(options) {
// 	Car.call(this, options); //OOP Inheritance for JS
// 	this.color = options.color;
// 	console.log('toyota constructor');
// }

// Toyota.prototype = Object.create(Car.prototype); //Inherits methods of the parent function/class

//For reference as why we need to assign a constructor in a function who inherits a function, refer here: https://stackoverflow.com/questions/8453887/why-is-it-necessary-to-set-the-prototype-constructor
// Toyota.prototype.constructor = Toyota;


// Toyota.prototype.honk = function() {
// 	return 'beep';
// };

// const toyota = new Toyota({ color: 'Red', title: 'Daily Driver' });
// console.log(toyota);
// console.log(toyota.drive());

// console.log(toyota.drive() instanceof Toyota);
// console.log(toyota.getConstructor({}) instanceof Toyota); //we then test the instance of the constructor used by Toyota. If `Toyota.prototype.constructor = Toyota;` isn't used, it will return false

/***END***/




/***ES6***/

class Car {
	constructor({ title }) {
		this.title = title;
	}

	// methods
	drive() {
		console.log('vroom');
	}
}

class Toyota extends Car {

	//note: you cannot use destructuring in this constructor because we're inheriting directly from Car.
	constructor(options) {
		//`super` is same as Car.constructor()
		super(options); //gets the constructor of the Car class;

		this.color = options.color;
	}

	// methods
	honk() {

	}
}

const car = new Car({title: 'Toyota'});
console.log(car);
car.drive();

const toyota = new Toyota({color:'red', title:'Daily Driver'});
console.log(toyota);
toyota.drive();

/***END***/

