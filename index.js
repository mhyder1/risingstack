require('./app/index');
var fs = require('fs');

console.log('start reading file.....');

fs.readFile('inde.js', function(err, content){
	if(err){
		console.log('error occurred during reading the file');
		return console.log(err);
	}
	console.log(content.toString());
});

console.log('end of the file');