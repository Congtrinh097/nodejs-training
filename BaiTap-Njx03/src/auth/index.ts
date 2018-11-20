let Auth:any = {};

Auth.requiredLogin = function(req:any, res:any, next:any) {
    console.log(req.session.isLogin);
    if (!req.session.isLogin) {
      console.log('User not loged in');
      res.redirect('/login');
    }
    console.log('Next urls will go');
    next();
  }
export default Auth;