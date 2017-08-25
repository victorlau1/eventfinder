let express = require('express');
let router = express.Router();
let axios = require('axios');
let bodyParser = require('body-parser');
let db = require('../database/index.js');
let async = require('async');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));

let apiKey = 'AIzaSyDmK0Cn9coNHBvlgldWcUxNvx2PqmdCUlg';

// very beginning of implementing google search to pull lat/lng to recenter the map/songkick search
router.post('/search', (req, res) => {
  //let url = `https://maps.googleapis.com/maps/api/geocode/json?address=944+Market+Street&key=${apiKey}`;

  loc = req.body.loc;
  loc = loc.split(' ');
  loc = loc.join('+');
  
  let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${loc}&key=${apiKey}`;
  axios.get(url)
    .then((response) => {
      //console.log('***response from google api ', response.data.results);
      res.send(response.data.results);
    })
    .catch(function (error) {
    console.log('Beep boop ... google router error: ', error);
    });
})

module.exports = router;

// curl https://maps.googleapis.com/maps/api/geocode/json?address=944+Market+Street&key=AIzaSyDmK0Cn9coNHBvlgldWcUxNvx2PqmdCUlg