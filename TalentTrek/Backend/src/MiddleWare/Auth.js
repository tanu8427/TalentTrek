const jwt = require('jsonwebtoken')
const ensureAuthenticated = (req,res,next)=>{

    const auth = req.header['authorization']
    if(!auth){
        return res.status(403)
        .json({message:'Unauthorization ,JWT token is requires'})
    }
    try{
      const decoded = jwt.verify(auth, "tanukumar")
      req.user = decoded
      next()
    }
    catch(error){
      return res.send(401).json({message:'Unauthorizaed, JWT token is wornd or expired'}) 
    }
}
module.exports =  ensureAuthenticated