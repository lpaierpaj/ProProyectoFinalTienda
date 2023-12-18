const mongoose = require('mongoose')


const userSchemma = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    photo: String,
    salt: String,
    isAdmin: Boolean

})

const User = mongoose.model('User', userSchemma)


module.exports = User