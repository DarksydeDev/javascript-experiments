"use strict";

var person = {};
// persom = {}; //in strict mode, this will throw an error as this was not declared

console.log(person);


var $ = {};
$.text = function () {
	console.log("texting...");	
}
$.click = function (fun) {
	var clickEventData = "asdasd";
	fun(clickEventData);
}

$.text();

$.click(function (e) {
	console.log(e)
});