const fs = require('fs');

fs.readFile('/Users/spandan/Documents/ReactFundamentals/sudokupuzzle.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  } else {

		console.log(data);
		let strings = data.split('\n')
		let stringOfStrings = []
		for (let stringsIndex = 0; stringsIndex < strings.length; stringsIndex++) { // for each line
			const element = strings[stringsIndex];
			stringOfStrings.push(element.split(' '))
		}

		console.log(stringOfStrings[3][5])
	}
});
