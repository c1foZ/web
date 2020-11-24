const express = require('express');
const uuid = require('uuid');
const path = require('path');
const exphbs = require('express-handlebars');
const cars = require('./cars');

const app = express();

app.use(express.static(path.join(__dirname, '..', 'frontend/')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const idFilter = (req) => (car) => car.id === parseInt(req.params.id);

app.get('/cars', (req, res) => {
	res.json(cars);
});

app.get('/cars/:id', (req, res) => {
	const found = cars.some(idFilter(req));

	if (found) {
		res.json(cars.filter(idFilter(req)));
		//res.status(200).json
	} else {
		res.status(400).json({
			msg: `No car with the id of ${req.params.id}.`,
		});
	}
});

app.post('/cars', (req, res) => {
	const nextCar = { ...req.body, id: uuid.v4() };
	if (!nextCar.name || !nextCar.color) {
		return res.status(400).json({ msg: 'Please include a name and color' });
	}
	cars.push(nextCar);
	res.redirect('/form.html');
});

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/form.html', (req, res) => {
	res.render('home', {
		title: 'Registered cars',
		cars,
	});
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log('App listening on port: ' + PORT));
