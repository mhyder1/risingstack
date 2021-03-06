const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const port = 3000;
const app = express();

//initialize handlebar engine
app.engine('.hbs', exphbs({
	defaultLayout: 'main',
	extname: '.hbs',
	layoutsDir: path.join(__dirname, 'views/layouts')
}));

app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (request, response) => {
	response.render('home', {
		name: 'Muhammad'
	})
})

app.listen(port, (err) => {
	if(err){
		return console.log('something bad happened', err);
	}

	console.log(`Server is listening on ${port}`);
})