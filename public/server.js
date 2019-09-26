require('newrelic');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helpers = require('./helpers.js')

const app = express();
const port = 3000;

app.use(cors());
app.use(morgan('dev'));

app.use("/", express.static('loader'))
app.use('/restaurants/:id', express.static('./public/lib'));
// app.use('/restaurants/:restaurantId', express.static('./public/lib'))

app.get('/api/restaurants/:id/reviews', function (req, res) {
    res.redirect(`http://52.8.6.53:3001/api/restaurants/${req.params.id}/reviews`)
});

app.get('/api/restaurants/:id/images', function (req, res) {
    res.redirect(`http://54.193.42.82:3002/api/restaurants/${req.params.id}/images`)
});

app.get('/api/restaurants/:id/availability', function (req, res) {
    const id = req.params.id.substring(1);
    res.redirect(`http://54.215.234.24:3003/api/restaurants/${id}/availability?date=${req.query.date}&time=${req.query.time}&seats=${req.query.seats}`)
});

app.get('/api/restaurants/:id/', function (req, res) {
    const id = req.params.id.substring(1)
    res.redirect(`http://54.215.234.24:3003/api/restaurants/${id}/`)
});



app.listen(port, () => console.log(`Proxy Server listening on port ${port}!`));
