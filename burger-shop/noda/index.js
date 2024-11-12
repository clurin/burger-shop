const productsList = require('./productsList.js')

const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/ingredients', (req, res) => {
    res.json(productsList)
})

app.listen(3010, () => console.log('Сервер OK'))