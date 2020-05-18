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
                res.status(500).send("Um erro aconteceu, tente mais tarde novamente");                
            })
    }

    add(req, res) {

        const useData = {
            ...req.body, 
            password: cryptoPassword(req.body.password)
        } 

        if(useData.email == null || useData.email == '')
        {
            throw  "Para cadastrar o usuário é preciso informar um email.";
        }

        if(req.body.password == null || req.body.password == '')
        {
            throw  "Para cadastrar o usuário é preciso informar uma senha.";
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
                let erro = { mensagem: '' };
                erro.mensagem = "Não foi possível criar o usuário";
                res.sendStatus(500).send(erro);
            });
    }
}

module.exports = Users;