const jwt = require('jsonwebtoken');
const {secret} = require('../config/default');

const verifyToken = (req, res, next) => {
    const token = req.headers['x-access-token'];

    if(!token) {
        return res
                .status(401)
                .send({
                    code: 'not_authorized',
                    message: 'Not Authorized'
                });                
    }

    jwt.verify(token, secret, (error, decode) => {
        if (error) {
            return res  
                    .status(500)
                    .send({error});
        }

        console.log('token_decode: ', decode);
        next();
    });
}

module.exports = verifyToken;