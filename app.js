const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/products');
const categoryRoutes = require('./routes/categories');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/products', productRoutes);
app.use('/categories', categoryRoutes);

mongoose.connect('your-mongodb-connection-string', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to the database');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
