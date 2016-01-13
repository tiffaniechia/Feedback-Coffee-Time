var CurrentUserPair = function (parameters) {
    this.user = parameters.user;
    this.currentPair = parameters.currentPair;
};

CurrentUserPair.prototype.getUserName = function () {
    return this.user.name;
};

CurrentUserPair.prototype.getPairName = function () {
    return this.currentPair.name;
};

module.exports = CurrentUserPair;