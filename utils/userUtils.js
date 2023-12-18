const crypto = require ('crypto')
const jwt = require('jsonwebtoken')


const createHashAndSalt = (password,)=>{
    const salt = crypto.randomBytes(16).toString('hex');
    const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, `sha512`).toString(`hex`)


    return{
        salt:salt,
        hash:hash
    }

}

const comparePasswords = (password, hash, salt)=>{
    const newHash = crypto.pbkdf2Sync(password, salt, 1000, 64, `sha512`).toString(`hex`)
    return hash === newHash
}

const createToken = (data)=>{
    const token = jwt.sign({
        data:data
    },'Secret')
    return token
}

validateToken = (token)=>{
    const verified = jwt.verify(token, 'Secret')
    return verified
} 


module.exports = {
    createHashAndSalt: createHashAndSalt,
    comparePasswords: comparePasswords,
    createToken:createToken,
    validateToken:validateToken

}