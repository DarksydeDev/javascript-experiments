var expense = {
	type: 'Business',
	amount: '$45 USD'
}


/*introduction*/
//before ES6
// var type = expense.type;
// var amount = expense.amount;

//ES6
let { type, amount } = expense;

// console.log(type, amount);
/*END*/

/*sample 1*/
var savedFile = {
	extension: 'jpg',
	name: 'repost',
	size: 14444
}

function fileSummary({ extension, name, size }) {
	return `The file ${name}.${extension} is of size ${size}`;
}

// console.log(fileSummary(savedFile));
/*END*/

/*sample 2 - destructuring arrays*/

const companies = [
	"Google",
	"Facebook",
	"Uber"
];

//1st use-case
const [name1, name2] = companies;
// console.log(name1, name2);

//2nd use-case - using spread operators
const [name, ...rest] = companies;
console.log(name)
console.log(rest);

/*END*/


/*sample 3 - destructuring arrays(still)*/

const points = [
	[4,5],
	[10,1],
	[0,40]
];

//note: we destructure 2 array elements in each array pair.
//ES5 way
// points.map(pair => {
// 	let x = pair[0];
// 	let y = pair[1];

// 	return {x:x, y:y};
// });

//ES6 way
const result = points.map(([x,y]) => {

	//note: we used Object literal syntax here.
	return { x, y };
});
console.log(result);


//example 2:
const classes = [
  [ 'Chemistry', '9AM', 'Mr. Darnick' ],
  [ 'Physics', '10:15AM', 'Mrs. Lithun'],
  [ 'Math', '11:30AM', 'Mrs. Vitalis' ]
];

const classesAsObject = classes.map(([subject, time, teacher]) => {
	return {subject, time, teacher}
});

console.log(classesAsObject)
/*END*/


