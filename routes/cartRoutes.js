const express = require('express')
const route = express.Router()
const cartControllers = require('../controllers/cartControllers')
const auth = require('../middlewares/auth')
const isAdmin = require('../middlewares/admin')

//route.get('/',auth, isAdmin, cartControllers.get)
//route.post('/',auth, isAdmin, cartControllers.create)
route.put('/',auth, cartControllers.update)
//route.delete ('/',auth, isAdmin, cartControllerss.remove)


module.exports = route