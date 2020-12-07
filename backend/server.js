const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const cars = require('./Cars');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/cars', require('./routes/cars'));

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/form', (req, res) => {
	res.render('home', {
		title: 'Registered cars',
		cars,
	});
});

app.use(express.static(path.join(__dirname, '..', 'frontend')));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log('App listening on port: ' + PORT));
