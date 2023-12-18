const express = require('express')
const route = express.Router()
const viewsControllers = require('../controllers/viewControllers')
const authMiddlewares = require('../middlewares/auth')
const isAdmin = require('../middlewares/admin')


route.get('/login',viewsControllers.login)
route.get('/register',viewsControllers.register)
route.get('/',authMiddlewares, viewsControllers.home)
route.get('/dashboard', authMiddlewares, isAdmin, viewsControllers.dashboard)
route.get('/cart', authMiddlewares, viewsControllers.cart)

module.exports = route