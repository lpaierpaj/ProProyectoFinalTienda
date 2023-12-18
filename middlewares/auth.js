const userUtils = require('../utils/userUtils')

const authMiddlewares = (req, res, next) => {
    const token = req.cookies.token
    
    if(token){
        const user = userUtils.validateToken(token)
        if(user){
            req.user = user.data
        next()

        }else{
            res.redirect('http://localhost:3000/login')   
        }

        
    }else{
        res.redirect('http://localhost:3000/login')
    }
    

}



module.exports =  authMiddlewares

