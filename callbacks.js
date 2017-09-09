function invokeCallback(func) {
	func();
}
function invokeCallbackWithParams(func) {
	func('value1', 'value2');
}

invokeCallback(function () {
	console.log('successfully invoked this callback!');
});


invokeCallbackWithParams(function (param1, param2) {
	console.log('invoking callback...');
	console.log('param 1: ',param1);
	console.log('param 2: ',param2);
	
});