var chai = require('chai');
chai.should();

var User = require('../../src/model/User.js');

describe('User', function () {
    var user;
    describe('#init', function () {
        user = new User({
            name: "first, last",
            email: "email"
        });
        it('should initialize with name, email', function () {
            user.name.should.equal("first, last");
            user.email.should.equal("email");
        });
    });
});