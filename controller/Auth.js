const UsersModel = require('../model/Users');
const usersModel = new UsersModel();

const createToken = require('../utils/createToken')


class Auth {
    validate(req, res) {
        const { email, password } = req.body;
        //console.log(email,senha)
        
        const conditions = [
            { field: 'email', operator: '==', value: email },
            { field: 'password', operator: '==', value: password }
        ]

        usersModel.getBy(conditions)
            .then((user) => {
                //console.log(user.docs[0].data());
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
                //console.log(user);
                //res.json(user.docs[0].data());
            })
            .catch((error) => {
                //console.error(error);
                res.status(500).send(error);
            })

    }

    //res.send(`Eu recebi o parametro ${req.params.id}`);
}

module.exports = Auth