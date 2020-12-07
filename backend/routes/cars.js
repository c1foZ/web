const express = require('express');
const uuid = require('uuid');
const router = express.Router();
const cars = require('../Cars');

const idFilter = (req) => (car) => car.id === parseInt(req.params.id);

router.get('/', (req, res) => {
	res.json(cars);
});

router.get('/:id', (req, res) => {
	const found = cars.some(idFilter(req));

	if (found) {
		res.json(cars.filter(idFilter(req)));
	} else {
		res.status(400).json({
			msg: `No car with the id of ${req.params.id}.`,
		});
	}
});

router.post('/', (req, res) => {
	const nextCar = { ...req.body, id: uuid.v4() };
	if (!nextCar.name || !nextCar.color) {
		return res.status(400).json({ msg: 'Please include a name and color' });
	}
	cars.push(nextCar);
	res.redirect('/form');
});

module.exports = router;
