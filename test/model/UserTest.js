var chai = require('chai');
chai.should();

var User = require('../../src/model/User.js');

describe('User', function () {
    var user;
    describe('#init', function () {
        user = new User({
            name: "first, last",
            email: "email",
            currentPair: "",
            previousPair: ""
        });
        it('should initialize with name, location', function () {
            user.name.should.equal("first, last");
            user.email.should.equal("email");
            user.currentPair.should.equal("");
            user.previousPair.should.equal("");
        });
    });
});