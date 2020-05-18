const verifyToken = require('../verifyToken');
const createToken = require('../../utils/createToken');

describe('verifyToken', () => {
    it('should return token is valid', () => {

        let tokenGenerated = createToken({ id: 'F7gUxobvmYn5YGivHNZf' }, '1min');

        let req = {
            headers: {
                "x-access-token": tokenGenerated
            }
        };

        let res = {
           status:200,
           send:{
               erro:"",
               messasge:""
           }
        };

        let next = new function(){};

        expect(verifyToken(req,res,next)).toEqual(200);
    });

    //it('should return token with default expire', () => {
    //    expect(verifyToken('')).not.toBeNull();
    //});
});