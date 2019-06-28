const mongoose = require('mongoose');

require('dotenv').config();

const uri = process.env.ATLAS_URI;

mongoose.set('debug', true);
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });

mongoose.Promise = Promise;

module.exports.User = require('./user');
