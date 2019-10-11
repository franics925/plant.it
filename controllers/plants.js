var request = require('request');
// const Plant = require('../models/plant');
// const rootURL= '"http://trefle.io/api/plants/';
const TREFLE_TOKEN = process.env.TREFLE_TOKEN;



function searchResults(req, res) {
    console.log("something");
    try {
        searchQuery = req.query.q
        request(`https://trefle.io/api/plants?token=${TREFLE_TOKEN}&q=${searchQuery}`, (err, meta, body) => {
            if (err) console.log(err);
            res.json(body);
        });
    } catch (error) {
        console.log(error);
    }
    
}

function plantDetails(req, res) {
    try {
        plantQuery = req.params.plantId
        request(`https://trefle.io/api/plants/${plantQuery}?token=${TREFLE_TOKEN}`, (err, meta, body) => {
            if (err) console.log(err);
            res.json(body);
        });
    } catch (error) {
        console.log(error);
    }
    
}

module.exports = {
    searchResults,
    plantDetails
};

