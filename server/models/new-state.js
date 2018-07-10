const mongoose = require('mongoose');
const { Schema } = mongoose;

const StateSchema = new Schema({
    mensaje: { type: String},
    url_foto: { type: String},
    url_location: { type: String},
    title_foto: { type: String},
    date: { type: String},
})

module.exports = mongoose.model('States', StateSchema);