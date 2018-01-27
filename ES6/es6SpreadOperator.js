const defaultColors = ['red', 'green'];
const userFavoriteColors = ['orange', 'yellow'];


// console.log([ ...defaultColors, ...userFavoriteColors ]);
// console.log([ ...defaultColors, userFavoriteColors ]);

// console.log([ 'green', 'blue', ...defaultColors, ...userFavoriteColors ]); //one of the useful use-cases of spread operators.



function validateShoppingList(...items) {
	if (items.indexOf('milk') < 0) {
		return ['milk', ...items];
	}


	return items;
}

// console.log(validateShoppingList('oranges', 'bread', 'eggs'));

//real-world use-case

/*Math Library*/
const MathLibrary = {
	calculateProduct(...rest) {
		return this.multiply(...rest);
	},
	multiply(a,b) {
		return a*b;
	}
}

console.log(MathLibrary.calculateProduct(5,5,5));