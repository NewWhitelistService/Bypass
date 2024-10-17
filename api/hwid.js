// api/receiveClientId.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Middleware to parse JSON requests
app.use(bodyParser.json());

let latestClientId = null;

// POST endpoint to receive client IDs
app.post('/', (req, res) => {
    latestClientId = req.body.clientId;  // Store the latest client ID
    res.status(200).send('Client ID received');
});

// GET endpoint to send back the latest client ID
app.get('/', (req, res) => {
    res.status(200).json({ clientId: latestClientId });
});

module.exports = app;
