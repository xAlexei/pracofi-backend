const express = require('express')
const app = express()

app.use(require('./register'));
app.use(require('./user'));
app.use(require('./news'));
app.use(require('./jobs'))

module.exports = app;