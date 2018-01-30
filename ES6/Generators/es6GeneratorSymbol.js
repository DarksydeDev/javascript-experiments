const testingTeam = {
	lead: 'Amanda',
	tester: 'Bill',
	//When testingTeam is called via yield*(for-of loop), this iterator will be called instead
	//It's job is to tell the for-of loop how should it iterate over an object.
	[Symbol.iterator]: function* () {
		console.log('calling iterator');
		yield this.lead;
		yield this.tester;
	}
};

const engineeringTeam = {
	testingTeam,
	size: 3,
	department: 'Engineering',
	lead: 'Jill',
	manager: 'Alex',
	engineer: 'Dave',
	[Symbol.iterator]: function* () {
		yield this.lead;
		yield this.manager;
		yield this.engineer;
		yield* this.testingTeam;
	}
};

const names = [];
for (let name of engineeringTeam) {
	names.push(name);
}

console.log(names);