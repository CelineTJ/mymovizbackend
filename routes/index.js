var express = require('express');
var router = express.Router();
const fetch = require ('node-fetch');

const My_API_Key = process.env.My_API_Key;

module.exports = router;

//créez une route /movies chargée de faire une requête vers le webservice The Movie Database


router.get('/movies', (req, res) => {
      fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${My_API_Key}`)
        .then(response => response.json())
        .then(data => {
            res.json({movies : data.results});
            console.log(data)
        });
       });
       
       module.exports = router;
   