var objectLiteral = {
	firstname: 'Sonny',
	isProgrammer: true
};

var objectLiteralJson = JSON.stringify(objectLiteral);

console.log(objectLiteralJson);

var jsonValue = JSON.parse(`{ "firstname": "Sonny", "isProgrammer": true}`);

console.log(jsonValue);
