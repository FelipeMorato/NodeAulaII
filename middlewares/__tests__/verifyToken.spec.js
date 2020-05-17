const verifyToken = require('../verifyToken');

describe('createToken', () => {
    it('should return token with default expire', () => {
            expect(createToken({id: 1})).not.toBeNull();
    });

    it('should return token with default expire', () => {
        expect(createToken({id: 1}, '12h')).not.toBeNull();
    });
});