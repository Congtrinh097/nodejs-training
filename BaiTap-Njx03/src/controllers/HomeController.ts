import User from "../models/User";
import {sendMail} from "../commons/sendmail";
var HomeController:any = {};
HomeController.Index = function(_req:any, res:any) {
    res.render("../views/index", { title: 'Home page' });
}

HomeController.Login = function(_req:any, res:any) {
    res.render("../views/login", { title: 'Login' });
}

HomeController.PostLogin = function(req:any, res:any) {
    var userreq = new User(req.body);
    console.log(userreq);
    User.findOne({ UserName: userreq.UserName })
    .exec(function (err:any, user:any) {
        if (err) {
            console.log("Login errors!");
            console.log("REDIRECT TO HOME 3");
            res.redirect("/");
        } else if (!user) {
            let error :any= new Error('User not found.');
            error.status = 401;
            console.log(err);
            console.log("REDIRECT TO HOME 1");
            res.redirect("/");
        }
        if (userreq.Password === user.Password) {
            sendMail();
            console.log("REDIRECT TO LIST");
            req.session.isLogin = true;
            res.redirect("/pets/list");
        } else {
            console.log("REDIRECT TO HOME 2");
            res.redirect("/");
        }
    });
}

HomeController.Logout = function(req:any, res:any) {
    if (req.session) {
      // delete session object
      req.session.destroy(function(err:any) {
        if(err) {
            console.log("Logout error")
            return res.redirect('/');
        } else {
            return res.redirect('/login');
        }
      });
    }
}

HomeController.InitUser = function(_req:any, res:any) {
  var user = new User({
      UserName: "admin",
      Password: '123'
  });
  user.save(function(err:any) {
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