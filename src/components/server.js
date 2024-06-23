

var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var cors = require('cors');
const fs = require('fs');
const creds = require('./config');
const { default: Contactform } = require('./Contactform');

const Contactform = express();
Contactform.use(cors());
Contactform.use(express.json());
Contactform.use('/', router);

Contactform.get('/', (req, res) => {
    res.json('hi');
});

app.listen(serverPort, () => console.log(`backend is running on port ${serverPort}`))
