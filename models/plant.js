const mongoose = require('mongoose');

const plantSchema = new mongoose.Schema({
    commonName: String,
    scientificName: String,
    Pictures: Array,
    Description: String,
    minWater: Number,
    toxicity: String,
    indoor: Boolean,



});


module.exports = mongoose.model('Plant', plantSchema)