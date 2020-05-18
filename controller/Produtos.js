const ProdutosModel = require('../model/Produtos.js');
const produtosModel = new ProdutosModel();

class Produtos {
    get(req, res) {
        const { id } = req.params;

        produtosModel.get(id)
            .then((produto) => {
                if (!produto.exists) {
                    res.status(404).send({ message: 'Product not found' });
                }

                res.json(produto.data());
            })
            .catch((error) => {
                res.status(500).send({menssagem:'Não foi possível realizar a requisição.'});
            });
    }

    add(req, res) {
        const data = {
            ...req.body,            
        }
        
        produtosModel.create(data)
            .then((productResult) => {                
                res.status(201).json({
                    ...data,
                    id: productResult.id,
                })
            })
            .catch((error) => {
                res.status(500).send({menssgem: 'Não foi possível cadastrar o produto.'});
            });
    }
}

module.exports = Produtos;