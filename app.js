const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/products');
const categoryRoutes = require('./routes/categories');
require('dotenv').config(); // Load environment variables from .env file

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/products', productRoutes);
app.use('/categories', categoryRoutes);

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGODB_URI);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to the database');
});

// Custom error handler middleware
app.use((err, req, res, next) => {
  if (err instanceof mongoose.Error.CastError) {
    res.status(400).send({
      error: {
        message: `Invalid ${err.kind} for field ${err.path}: ${err.value}`,
        type: err.name,
      },
    });
  } else if (err instanceof mongoose.Error.ValidationError) {
    const errorDetails = {};
    for (let field in err.errors) {
      errorDetails[field] = err.errors[field].message;
    }
    res.status(400).send({
      error: {
        message: 'Validation failed',
        type: err.name,
        details: errorDetails,
      },
    });
  } else if (err.name === 'SyntaxError' && err.status === 400 && 'body' in err) {
    res.status(400).send({
      error: {
        message: 'Invalid JSON',
        type: 'SyntaxError',
      },
    });
  } else {
    res.status(500).send({
      error: {
        message: 'Internal Server Error',
        type: 'InternalError',
      },
    });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
