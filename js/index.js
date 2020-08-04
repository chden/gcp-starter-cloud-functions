'use strict';

const express = require('express');
const {loggerHttp, loggerError} = require('./logger');
const cors = require('cors');


const app = express();

app.use(loggerHttp);

// eslint-disable-next-line new-cap
const router = express.Router();

app.use(cors());

const {hello, helloUser} = require('./hello');
router.get('/', hello);
router.get('/:username', helloUser);

app.use('/', router);

app.use(loggerError);


exports.app = app;