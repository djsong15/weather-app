const express = require('express');
const path = require('path');
const app = express();

require('dotenv').config();

app.use(express.json());

// app.use(express.static(path.join(__dirname, '/index.html')));

app.get('/', (req, res) => res.sendFile(path.join(__dirname,'./index.html')));

app.use((req, res) => res.sendStatus(404));

app.listen(process.env.PORT, () => console.log(`Server listening on port ${process.env.PORT}`));

module.exports = app;