var chai = require('chai');
chai.should();

var CurrentUserPair = require('../../src/model/CurrentUserPair.js');
var User = require('../../src/model/User.js');

describe('User', function () {
    var currentUserPair, firstUser, otherUser;
    before(function () {
        firstUser = new User({
            name: "first, last",
            email: "email"
        });
        otherUser = new User({
            name: "first, last",
            email: "email"
        });
        currentUserPair = new CurrentUserPair({
            user: firstUser,
            currentPair: otherUser
        });
    });
    describe('#init', function () {

        it('should initialize with user and other user', function () {
            currentUserPair.user.should.equal(firstUser);
            currentUserPair.currentPair.should.equal(otherUser);
        });
    });

});