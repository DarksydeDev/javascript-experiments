// let res = "()()()".split("").reduce(function (previous, char) {
// 	if (char === "(") return ++previous;
// 	if (char === ")") return --previous;
// }, 0);

let res = "((()()()".split("").reduce((previous, char) => char === "(" ? ++previous : char === ")" ? --previous : previous, 0);
console.log(res);



var trips = [{ distance: 34 }, { distance: 12 } , { distance: 1 }];

var totalDistance = trips.reduce((sum, prev) => sum + prev.distance, 0);

console.log(totalDistance);