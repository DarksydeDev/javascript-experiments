const testingTeam = {
	lead: 'Amanda',
	tester: 'Bill'
};

const engineeringTeam = {
	testingTeam,
	size: 3,
	department: 'Engineering',
	lead: 'Jill',
	manager: 'Alex',
	engineer: 'Dave'
};


function* TeamIterator({lead, manager, engineer, testingTeam}) {
	yield lead;
	yield manager;
	yield engineer;


	const testingTeamGenerator = TestingTeamIterator(testingTeam);
	yield* testingTeamGenerator; //Generator delegation
}

function* TestingTeamIterator({lead, tester}) {
	yield lead;
	yield tester;
}


const names = [];

for (let name of TeamIterator(engineeringTeam)) {
	names.push(name);
}

console.log(names);