const express = require('express');
const path = require('path');

const app = express();

// EJS configuration
app.set('views', path.join(__dirname, 'views')); // Assuming your EJS views are in a 'views' directory
app.set('view engine', 'ejs');

// Define your routes and logic as usual
app.get('/', (req, res) => {
  res.render('index'); // Example rendering an EJS template
});

module.exports = app;