const jwt = require('jsonwebtoken');
const HttpError = require('standard-http-error');
const secretKey = "nsdjeh83849"

const getUser = (req,res,next)=>{

    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    
    if(!token) return next(new HttpError(401,"Unauthorized access"));
    
    try{
        let validate = jwt.verify(token,secretKey);
        next();
    }
    catch(err){
        return next(new HttpError(401,"Unauthorized access"))
     
    }
    
}
module.exports = {
    getUser,
}