const jwt = require("jsonwebtoken");

function checkAuth(req, res, next){
    try{
        const token1 = req.headers.authorization.split(" ")[1];
        const decodedToken = jwt.verify(token1, "secret");
        req.userData = decodedToken;
        next()
    }catch(e){

    }
}

module.exports = {
    checkAuth: checkAuth
}