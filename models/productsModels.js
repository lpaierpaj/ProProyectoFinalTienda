const mongoose = require('mongoose')


const productSchemma = new mongoose.Schema({
    name: String,
    price: Number,
    image: String,
    description: String

})

const Products = mongoose.model('Products', productSchemma)


module.exports = Products