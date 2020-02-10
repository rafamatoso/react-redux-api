const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4000;

mongoose
  .connect('mongodb://localhost/shoppingcar', {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  .then(() => console.log('DB Server Connected'))
  .catch(e => console.log('DB Error', e));

app.use(cors());
app.use(express.json());
app.use(routes);
app.set('PORT', PORT);

module.exports = app;
