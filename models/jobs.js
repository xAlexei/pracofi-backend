const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newSchema = Schema({
   vacancy: String,
   description: String,
   time: String,
   requirements: String,
   salary: String
})

module.exports = mongoose.model('jobs', newSchema);
