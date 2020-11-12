const express = require('express');
const path = require('path');
const logger = require('./logger');
const cars = [];

const app = express();
const PORT = process.env.PORT || 3000;

//app.use(logger);
app.use(express.static(path.join(__dirname, '..', 'frontend/')));
app.use(express.json());

app.get('/cars', (req, res) => {
	res.json(cars);
});

app.get('/cars/:id', (req, res) => {
	const carID = Number(req.params.id);
	const getCar = cars.find((car) => car.id === carID);
	res.json(getCar);
});

app.post('/cars', (req, res) => {
	const nextCar = req.body;
	cars.push(nextCar);
	res.json(cars);
});

app.listen(PORT, () => console.log('App listening on port: ' + PORT));
