

class Comment {
	constructor(content, children) {
		this.content = content;
		this.children = children;
	}


	*[Symbol.iterator]() {
		yield this.content;
		for (let child of this.children) {
			yield* child; //find every yield values of that child.
		}
	}
}


const children = [
	new Comment('good comment'),
	new Comment('bad comment'),
	new Comment('meh')
]

const tree = new Comment('Great post!', children);

//note: You can use generators to only specify which values to iterate over an object array.
const values = [];
for(let value of tree) {
	values.push(value);
}

console.log(values);