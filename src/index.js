const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 4000;

mongoose
  .connect('mongodb://localhost/shoppingcar', {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  .then(() => console.log('DB server connect'))
  .catch(e => console.log('DB error', e));

app.use(express.json());
app.use(routes);
app.set('PORT', PORT);

module.exports = app;

// app.get('/', (req, res) => res.send('Hello World!'));
// app.listen(port, () => console.log(`Example app listening on port port!`));
