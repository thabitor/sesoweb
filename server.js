

import express, { json } from 'express';
import cors from 'cors';

var express = require('express');
var router = express.Router();
var cors = require('cors');
const creds = require('./config');

const app = express();
app.use(cors());
app.use(json());
app.use('/app', router);

app.get('/app', (req, res) => {
    res.json('hi');
});
