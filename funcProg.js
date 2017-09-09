function mapForEach(arr, fn) {
	
	var newArr = [];

	for (var i = 0; i < arr.length; i++) {
		newArr.push(
			fn(arr[i])
		);
	};


	return newArr;
}

function functionReducerSum(arr, fn) {

	var currSum = 0;
	for (var i = 0; i < arr.length; i++) {
		currSum += arr[i];
		fn(arr[i], currSum);
	};	
}


var arr1 = [1,2,3];
var arr2 = mapForEach(arr1, function(item) {
	return item * 2;
});

console.log(arr1);
console.log(arr2);

functionReducerSum([1,2,3,4,5], function(curr, sum) {
	console.log('Current array: ',curr);
	console.log('Sum of arrays currently evaluated: ',sum);
});


var checkPastLimit = function (limiter, item) {
	return item > limiter;
}

var checkPastLimitOne = function (item) {
	var fnPastLimit = checkPastLimit.bind(this, 1);
	return fnPastLimit(item);
}

var arr3 = mapForEach(arr1, checkPastLimitOne);
console.log(arr3);

var checkPastLimitSimplified = function (limiter) {
	return function (limiter, item) {
		return item > limiter;
	}.bind(this, limiter);
}

var arr4 = mapForEach(arr1, checkPastLimitSimplified(1));
console.log(arr4);

