var jSynergy = function (selector, context) {
	
}

jSynergy.fn = jSynergy.prototype = {
	bind: function () {
		console.log('Binding data...');
		return this;
	},
	reduce: function () {
		console.log('Reducing data...');
		return this;
	},
	then: function () {
		console.log('processing ajax data...');
		return this;
	},
	done: function () {
		console.log('completing ajax data...');
		return this;
	}
}

jSynergy.fn.extend = function () {
	var target = arguments[0];
	console.log(arguments.length);
	console.log('extending functions...');
	console.log(target);
	return target;
}

jSynergy.fn.extend({
	data: function () {
		console.log('getting data...');
	},
	timeAlter: function() {
		console.log('altering time...');
	}
});
// console.log(jSynergy);

// jSynergy.fn.bind().reduce().extend().data();
jSynergy.fn.bind();
