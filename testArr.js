let arr = [{myvar1: 'asda'}, {myvar2: 'asjsd'}, {myvar3: 'asjsd'}];

// console.log(arr[0].myvar1);

arr.map((x, i) => {
	console.log(Object.keys(x)[0]);
});


function function_name(asd) {
	console.log('invoked');
}


(function (val) {
	console.log('invokkkkkeee', val);	

})(12345);