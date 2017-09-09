function greet(fname, lname, lang) {

	lang = lang || 'en'; //coerce value to put default value(if undefined then 'en')
	
	//arguments keyword is deprecated anymore...
	if (arguments.length === 0) { 
		console.log('Missing parameters!');
		console.log('------------------------');
		return;
	}

	
	console.log(fname);
	console.log(lname);
	console.log(lang);
	console.log(arguments);
	console.log('------------------------')
}



greet();
greet('Sonny');
greet('Sonny', 'Recio');




