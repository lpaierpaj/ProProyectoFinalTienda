const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const viewsRouter = require('./routes/viewsRoutes')
const userRoutes = require('./routes/userRoutes')
const productRoutes = require('./routes/productsRoutes')
const cartRoutes = require('./routes/cartRoutes')

const cookieParser = require('cookie-parser')

const ejs = require('ejs')
const mongoose = require('mongoose')
const app = express()
const port = 3000

// Middlewares
app.use(bodyParser.json())
app.use(cors())
app.use(cookieParser())
app.use(express.static('public'));
app.set('view engine', 'ejs');


//rutas de vistas

app.use('/', viewsRouter)

// rutas de recursos
app.use('/api/user/', userRoutes)
app.use('/api/cart/', cartRoutes)
app.use('/api/product/', productRoutes)

app.listen(port, async () => {
 await mongoose.connect('mongodb://127.0.0.1:27017/proyecto_final')
  console.log('database connected')
console.log(`Example app listening on port ${port}`)
})