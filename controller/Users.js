const UsersModel = require('../model/Users');
const usersModel = new UsersModel();
class Users {
    get(req, res) {
        const { id } = req.params;

        usersModel.get(id)
            .then((user) => {                
                if (!user.exists) {
                    res.status(404).send({message: 'User not found'});
                }

                //console.log(user);
                res.json(user.data());
            })
            .catch((error) => {
                //console.error(error);
                res.status(500).send(error);                
            })

        //res.send(`Eu recebi o parametro ${req.params.id}`);
    }

    add(req, res) {

        usersModel.add(req.body)
            .then(userResult => {

                res.status(201).json({ ...req.body, id: userResult.id });
            })
            .catch(error => {

                console.log(error);
                res.sendStatus(500);
            });

    }
}

module.exports = Users;