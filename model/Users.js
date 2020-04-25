const BaseModel = require('./BaseModel');

//export class Users extends BaseModel {
class Users extends BaseModel {
    constructor() {
        super();
    }

    get(id) {
        return this.db
            .collection('users')
            .doc(id)
            .get();
    }

    getBy(conditions) {
        let db = this.db.collection('users');

        conditions.forEach(({ field, operator , value }) => 
            db = db.where(field, operator, value)
        );

        return db.get();
    }


}

module.exports = Users