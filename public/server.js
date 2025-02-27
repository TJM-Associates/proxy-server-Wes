require('newrelic');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(morgan('dev'));

app.use("/", express.static('loader'))
app.use('/restaurants/:id', express.static('./public/lib'));
// app.use('/restaurants/:restaurantId', express.static('./public/lib'))

app.get('/api/restaurants/:id/reviews', function (req, res) {
    res.redirect(`http://54.67.96.77/api/restaurants/${req.params.id}/reviews`);
});

// app.get('/api/restaurants/:id/images', function (req, res) {
//     res.redirect(`http://13.52.76.158/api/restaurants/${req.params.id}/images`)
// });

// app.get('/api/restaurants/:id/availability', function (req, res) {
//     const id = req.params.id.substring(1);
//     res.redirect(`http://54.215.234.24:3003/api/restaurants/${id}/availability?date=${req.query.date}&time=${req.query.time}&seats=${req.query.seats}`)
// });

// app.get('/api/restaurants/:id/', function (req, res) {
//     const id = req.params.id.substring(1)
//     res.redirect(`http://54.215.234.24:3003/api/restaurants/${id}/`)
// });



app.listen(port, () => console.log(`Proxy Server listening on port ${port}!`));
