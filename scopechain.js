function b() {
	console.log(myVar);
}

function a() {
	function c() {
		console.log(myVar);
	}
	var myVar = 2;
	b();
	c();
}

var myVar = 1;

a();

console.log('hello world!');