const UsersModel = require('../model/Users');
const usersModel = new UsersModel();
const cryptoPassword = require('../utils/cryptoPassword');
class Users {
    get(req, res) {
        const { id } = req.params;

        usersModel.get(id)
            .then((user) => {                
                if (!user.exists) {
                    res.status(404).send({message: 'User not found'});
                }
                
                res.json(user.data());
            })
            .catch((error) => {
                res.status(500).send(error);                
            })
    }

    add(req, res) {

        const useData = {
            ...req.body, 
            password: cryptoPassword(req.body.password)
        } 

        usersModel.add(useData)
            .then((userResult) => {

                delete useData.password;

                res.status(201).json({ 
                    ...useData, 
                    id: userResult.id 
                });
            })
            .catch(error => {

                console.log(error);
                res.sendStatus(500);
            });
    }
}

module.exports = Users;