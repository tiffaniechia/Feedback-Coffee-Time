var User = function (parameters) {
    this.name = parameters.name;
    this.email = parameters.email;
    this.currentPair = "";
    this.previousPair = "";
};

module.exports = User;