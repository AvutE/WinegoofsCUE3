var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var WineSchema = new Schema({
    name: {type: String, required: true, max: 50},
    price: {type: Number, required: true},
    artNum: {type: Number, required: true},
    origin: {type: String, required: true, max: 50},
    region: {type: String, required: true, max: 50},
    grape: {type: Array, required: true, max: 50},
    type: {type: String, required: true, max: 20}
});

module.exports = mongoose.model('Wine', WineSchema);