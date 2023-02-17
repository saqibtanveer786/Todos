const jwt = require('jsonwebtoken')

const fetchid =  (req, res, next)=>{
    try {
    const token = req.header.auth-token
    if(!token){res.status(401).send('error')} 
    const sendedjsondata = jwt.verify(token, 'secret')
    req.user = id.user
    next()
} catch (error) {
        res.status(401).send('catch error')
}
}

module.exports = fetchid