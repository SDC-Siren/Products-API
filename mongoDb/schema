const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    _id: Number,
    name: String,
    slogan: String,
    description: String,
    category: String,
    default_price: Number
});

const featuresSchema = new mongoose.Schema( {
    _id: Number,
    product_id: Number,
    feature: String,
    value: String
});

const stylesSchema = new mongoose.Schema( {
    _id: Number,
    product_id: Number,
    name: String,
    sale_price: Number,
    original_price: Number,
    default_style: Boolean
});

const photosSchema = new mongoose.Schema({
    _id: Number,
    style_id: Number,
    url: String,
    thumbnail_url: String
});


const skusSchema = new mongoose.Schema({
    _id: Number,
    style_id: Number,
    size: String,
    quantity: Number
});

const relatedSchema = new mongoose.Schema({
    _id: Number,
    current_product_id: Number,
    related_product_id: Number
});

const Product = mongoose.model('Product', productSchema);
const Features = mongoose.model('Features', featuresSchema);
const Styles = mongoose.model('Styles', stylesSchema);
const Photos = mongoose.model('Photos', photosSchema);
const Skus = mongoose.model('Skus', skusSchema);
const Related = mongoose.model('Related', relatedSchema);

module.exports = { Product, Features, Styles, Photos, Skus, Related };