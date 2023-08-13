// import modules
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();

// app
const app = express(); // Creates the app

// db
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB CONNECTED'))
  .catch((err) => console.log('DB CONNECTION ERROR', err));

// middleware
app.use(morgan('dev')); // Middleware for HTTP request logging in development mode.
app.use(cors({ origin: true, credentials: true })); // Middleware for enabling Cross-Origin Resource Sharing (CORS) for the server.

// routes
const testRoutes = require('./routes/test');
app.use('/', testRoutes);

// port
const port = process.env.PORT || 3001;

// listener
const server = app.listen(port, () =>
  console.log(`Server is running on port ${port}`)
);
