//* Массив ингредиентов
const productsList = require('./productsList.js')

const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const orders = []

app.get('/ingredients', (req, res) => {
    return res.json(productsList)
})

app.post('/addorder', (req, res) => {
    const newOrder = req.body

    if (!newOrder || !Array.isArray(newOrder) || newOrder.length === 0) {
        return res.status(400).json({ error: 'Некорректный формат заказа' })
    }

    newOrder.queue = orders.length
    orders.push(newOrder)
    return res.json({ message: 'Заказ был добавлен', success: true })
})

app.get('/orders', (req, res) => {
    return res.json(orders)
})

app.listen(3010, () => console.log('Сервер OK'))