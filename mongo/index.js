const mongoose = require('mongoose');
const { Product, Features, Styles, Photos, Skus, Related } = require('./schema.js');

db = mongoose.connect('mongodb://localhost/atelierProducts')
