const cryptoPassword = require('../cryptoPassword');


describe('cryptoPassword', () => {
    it('should return password with crypto', () => {
            expect(cryptoPassword(password = '123456789')).not.toBeNull();
    });

  
});