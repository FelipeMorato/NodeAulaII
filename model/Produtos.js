const BaseModel = require('./BaseModel');

class Produtos extends BaseModel {
    constructor() {
        super();
    }

    get(id) {
        return this.db
            .collection('produtos')
            .doc(id)
            .get();
    }

    getBy(conditions) {
        let db = this.db.collection('produtos');

        conditions.forEach(({ field, operator , value }) => 
            db = db.where(field, operator, value)
        );

        return db.get();
    }

    create(data) {
        return this.db.collection('produtos').add(data);
    }
}

module.exports = Produtos;