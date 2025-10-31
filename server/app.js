const express = require('express');
const morgan = require('morgan');
const axios = require('axios');
const apiKey = "&apikey=1b06115";
let url = "http://www.omdbapi.com";

const app = express();
app.use(morgan('dev'));

app.get('/', (req, res) => {
    console.log(req.query);
    console.log(req.url);
axios.get(url + req.url + apiKey)
    .then(response => {
        
        res.send(response.data);
    })
    .catch(error => {
        console.error('Error fetching data from OMDb API:', error);
    });

});

app.get('/', (req, res) => {
    console.log(req.query);

axios.get(url + "?t=baby+driver&" + apiKey)
    .then(response => {
        
        res.send(response.data);
    })
    .catch(error => {
        console.error('Error fetching data from OMDb API:', error);
    });

});

// When making calls to the OMDB API make sure to append the '&apikey=8730e0e' parameter


module.exports = app;


//