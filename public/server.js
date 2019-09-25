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

app.get('/api/restaurants/:id/reviews', function (req, res) {
    helpers.getReviewbyID(req.body.data, function(reviewObj) {
      // console.log(reviewObj)
    });
    // console.log('req data', req.body);
  
    res.end('got here');
});

app.get('/api/restaurants/:restaurantId/availability', function (req, res) {
    helpers.getReservationsbyID(req.body.data, function(reservationObj) {
      // console.log(reservationObj)
    });
    // console.log('req data', req.body);
  
    res.end('got here');
});

app.get('/api/restaurants/:restaurantId/', function (req, res) {
    helpers.getReservationsbyID(req.body.data, function(reservationObj) {
      console.log(reservationObj)
    });
    // console.log('req data', req.body);
  
    // res.redirect(`http://54.193.42.82:3002/api/restaurants/${req.params.rid}/images`)
});

app.get('/api/restaurants/:id/images', function (req, res) {
    console.log(req.params.id);
    // console.log(res);
    res.redirect(`http://54.193.42.82:3002/api/restaurants/${req.params.id}/images`)
    helpers.getPhotosbyID(req.body.data, function(photosObj) {
      // console.log(photosObj)
    });
    // console.log('req data', req.body);
    res.end('got here');

});


app.listen(port, () => console.log(`Proxy Server listening on port ${port}!`));
