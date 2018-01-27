var numbers = [1, 1, 2, 3, 4, 4];

function unique(array) {
  return array.reduce(function(acc, prev) {
  	if (acc.find(x => x === prev) > 0) return acc;

  	return acc.concat([prev]);
  }, []);
}

unique(numbers);