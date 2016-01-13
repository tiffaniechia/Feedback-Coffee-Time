var CurrentUserPair = function (parameters) {
    this.user = parameters.user;
    this.currentPair = parameters.currentPair;
};

CurrentUserPair.prototype.getUserName = function () {
    return this.user.name;
};



module.exports = CurrentUserPair;