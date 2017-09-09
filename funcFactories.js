
//acted as factory function while taking advantage of closures(`lang`)
function makeGreeting(lang) {


	return function (fname, lname) {
		
		if (lang === 'en') {
			console.log('Hello ' + fname + ' ' + lname);
		}

		if (lang === 'es') {
			console.log('Hola ' + fname + ' ' + lname);
		}
	}
}

var greetEnglish = makeGreeting('en'); //own closure('en' as lang)
var greetSpanish = makeGreeting('es'); //own closure('es' as lang)

greetSpanish('Sonny', 'Recio');