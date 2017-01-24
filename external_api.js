const rp = require('request-promise');
const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();

app.engine('.hbs', exphbs({
	defaultLayout: 'main',
	extname: '.hbs',
	layoutsDir: path.join(__dirname, 'views/layouts')
}))

// app.set('view engine', '.hbs');
// app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
	rp({
		uri: 'http://google.com',
		// qs: {
		// 	q: req.params.city,
		// 	apikey: '1OL537IAaXcSQ7LXZ7CGVuBbzUz5KSnl'
		// },
		json: true
	}).then((data) => {
		//res.render('index', data);
		console.log(data);
	}).catch((err) => {
		console.log('--------------- ERROR ------------------------');
		console.log(err);
		// res.render('error');
	})
})

app.listen(3000);