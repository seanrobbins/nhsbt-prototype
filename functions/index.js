const functions = require('firebase-functions');
const express = require('express');
const nunjucks = require('nunjucks');

// Initialize express app
const app = express();

// Configure Nunjucks
nunjucks.configure('../views', {
    autoescape: true,
    express: app,
    watch: true
});

// Create a route
app.get('/', (req, res) => {
    res.render('index.njk', { title: 'Nunjucks with Express on Firebase' });
});

// Export the Express app as a Firebase Function
exports.app = functions.https.onRequest(app);

