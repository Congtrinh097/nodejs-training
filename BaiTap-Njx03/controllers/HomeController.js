var HomeController = {};

HomeController.Index = function(req, res) {
    res.render("../views/index", { title: 'Express' });
}

HomeController.Login = function(req, res) {
    res.render("../views/login", { title: 'Login' });
}

HomeController.PostLogin = function(req, res) {
    res.render("../views/login");
}

module.exports = HomeController;