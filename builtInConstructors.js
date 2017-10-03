//acts like extension methods in C# sense
String.prototype.isLengthGreaterThan = function(limit) {
	return this.length > limit;
};
Number.prototype.isPositive = function() {
	return this > 0;
};


var a = new String("gaofasdas");
console.log(a.isLengthGreaterThan(3));
console.log("me".isLengthGreaterThan(3));

console.log(a.indexOf("o"));

var b = new Number(5);

// console.log(5.isPositive()); //doesn't work with primitives