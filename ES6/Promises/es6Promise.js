promise = new Promise((resolve, reject) => {
	// reject();
	resolve();
});

//we use these to register callbacks
promise
	.then(function () { //this gets called when the promises is resolved.
		console.log("finished");
	})
	.then(function () {
		console.log("This is also ran!!")
	})
	.catch(function () { //this gets called when the promises is rejected.
		console.log("error");
	});

console.log(promise);
