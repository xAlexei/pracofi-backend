const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newSchema = new Schema({
    titulo: String,
    subtittle: String,
    content: String,
    image: String
})

module.exports = mongoose.model('news', newSchema);