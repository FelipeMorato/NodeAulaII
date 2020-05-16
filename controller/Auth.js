const UsersModel = require('../model/Users');
const usersModel = new UsersModel();
const createToken = require('../utils/createToken');
const cryptoPassword = require('../utils/cryptoPassword');

class Auth {
    validate(req, res) {

        const { email,password } = req.body;

        const conditions = [
            { field: 'email', operator: '==', value: email },
            { field: 'password', operator: '==', value: cryptoPassword(password) }
        ]       

        usersModel.getBy(conditions)
        .then((user) => {
            if (user.docs.length === 0) {
                return response
                    .status(401)
                    .send({
                        code: 'not_found',
                        message: 'User not found'
                    });
            }

            if (user.docs.length > 1) {
                return res.status(500).send({ message: 'Too many responses' });
            }
            
            res.send({ token: createToken({ id: user.docs[0].id }) })
        })
        .catch((error) => {            
            res.status(500).send({messagem:"Usuário ou senha incorreto."});
        })
    }
}

module.exports = Auth