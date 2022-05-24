require('./config/config');

const express = require('express')
const app = express()
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const path = require('path');
const cors = require("cors");
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// CORS
var corsOptions = {
  origin: "http://localhost:4200"
};
app.use(cors(corsOptions));
app.use(bodyParser.json())
app.use(require('./routes/routes'));

let renderHTML = path.resolve(__dirname, '../public/index.html');

app.get('/', function (req, res) {
  res.sendFile(renderHTML);
})

mongoose.connect(process.env.URLDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, (err) => {
  if (err) throw err;
  console.log("Base de datos online");
});

app.listen(process.env.PORT, () => {
  console.log("Escuchando en puerto 4201");
})