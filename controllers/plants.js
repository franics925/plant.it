var request = require('request');
// const Plant = require('../models/plant');
// const rootURL= '"http://trefle.io/api/plants/';
const TREFLE_TOKEN = process.env.TREFLE_TOKEN;
// import {fetchUrl} from 'fetch';

// var fetch = require("fetch").fetchUrl;


function searchResults(req, res) {
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
        plantQuery = req.query.qp
        request(`https://trefle.io/api/plants?token=${TREFLE_TOKEN}&qp=${searchQuery}`, (err, meta, body) => {
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

