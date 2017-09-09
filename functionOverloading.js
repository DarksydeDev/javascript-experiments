function greet(fname, lname, lang) {

	lang = lang || 'en'; //coerce value to put default value(if undefined then 'en')
	
	//arguments keyword is deprecated anymore...
	if (arguments.length === 0) { 
		console.log('Missing parameters!');
		console.log('------------------------');
		return;
	}

	if (lang === 'en') {
		console.log('Hello '+fname+' '+lname);
	}
	if (lang === 'es') {
		console.log('Hola '+fname+' '+lname);
	}
	
}


function greetEnglish(fname, lname) {
	greet(fname, lname, 'en');
}
function greetSpanish(fname, lname) {
	greet(fname, lname, 'es');
}


greet('Sonny', 'Recio');
greet('Sonny', 'Recio', 'es');




