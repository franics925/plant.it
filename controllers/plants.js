var request = require('request');
const Plant = require('../models/plant');
const rootURL= '"http://trefle.io/api/plants/';
const TREFLE_TOKEN = process.env.TREFLE_TOKEN;
// import {fetchUrl} from 'fetch';

var fetch = require("fetch").fetchUrl;


module.exports = {
    searchResults,
};

function searchResults(req, res) {
    // console.log('plant: ', req.body.plant)
    https://trefle.io/api/plants?token=&common_name=blackwood

    try {
        request(`https://trefle.io/api/plants?token=${TREFLE_TOKEN}&common_name=daisy`, (err, meta, body) => {
            if (err) console.log(err);
            res.json(body);
        });
    } catch (error) {
        console.log(error);
    }

}


// // make a request to the api using the key
// request(categoriesURL, function(err, response, body) {
//     // if the res works, send the data
//     if (req.query) {
//         request(`https://trefle.io/api/plants?token=${TREFLE_KEY}&common_name=blackwood`, function(err, response, body) {
//             const plant = JSON.parse(body)
//             res.render('Search', {plant: plant.common_name});
//         });
//     // if it doesnt, send an error and a message
//     } else {
//         res.render('Search', {plant: null});
//     }
    
// });