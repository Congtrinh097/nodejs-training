var User = require("../models/User");
var HomeController = {};
HomeController.Index = function(req, res) {
    res.render("../views/index", { title: 'Home page' });
}

HomeController.Login = function(req, res) {
    res.render("../views/login", { title: 'Login' });
}

HomeController.PostLogin = function(req, res) {
    var userreq = new User(req.body);
    console.log(userreq);
    User.findOne({ UserName: userreq.UserName })
    .exec(function (err, user) {
        if (err) {
            console.log("Login errors!");
            console.log("REDIRECT TO HOME 3");
            res.redirect("/");
        } else if (!user) {
            var err = new Error('User not found.');
            err.status = 401;
            console.log(err);
            console.log("REDIRECT TO HOME 1");
            res.redirect("/");
        }
        if (userreq.Password === user.Password) {
            console.log("REDIRECT TO LIST");
            res.redirect("/pets/list");
        } else {
            console.log("REDIRECT TO HOME 2");
            res.redirect("/");
        }
    });
}

HomeController.InitUser = function(req, res) {
  var user = new User({
      UserName: "admin",
      Password: '123'
  });
  user.save(function(err) {
      if(err) {
        console.log(err);
        res.write(err);
        res.end();
      } else {
        console.log("Init user done!");
        res.write("Init user done!");
        res.end();
      }
  });
}
module.exports = HomeController;