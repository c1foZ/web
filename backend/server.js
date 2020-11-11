const express = require('express');
const path = require('path');
const logger = require('./logger');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(logger);
app.use(express.static(path.join(__dirname, '..', 'frontend/')));

app.listen(PORT, () => console.log('App listening on port: ' + PORT));

