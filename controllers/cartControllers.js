const Cart = require ('../models/cartModels')
const Product = require ('../models/productsModels')

const  update = async (req, res) =>{
    try {
        const cart = await Cart.findOne ({userId: req.user._id})
        cart.products.push(req.body.productId)   
        cart.save()     
        res.status(200).end()
        console.log('user:',req.user._id)
        console.log('cart:', cart)
        console.log('productId:',req.body.productId)
    } catch(error){
        res.status(500).end()
    
    }


}/*

const remove = async(req, res) =>{
    try {
        console.log('id', req.body.productId)
        await Product.deleteOne ({_id: req.body.productId})                             //await Product.findByIdAndRemove (req.body.product.Id)
        res.status(200).end()
    } catch(error){
        res.status(500).end()
    
    }


}

/*

const get = async(req, res) => {
    try {
        const Cart = await Cart.find({userId: req.body.user_id})
        res.status(200).json(Cart)

      
    } catch(error){
        res.status(500).end()    
    }


}



*/




module.exports = {
  //  create:create,
        update:update,
  //  remove:remove,
   // get:get
    
}