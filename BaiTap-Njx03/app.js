var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');

var indexRouter = require('./routes/index');
var petsRouter = require('./routes/pets');
var loginRouter = require('./routes/login');
var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//config session
var sess = {
  secret: 'keyboard cat',
  cookie: {}
}
//use session midleware
app.use(session(sess));
app.use('/', loginRouter);
//login midleware
app.use(function(req, res, next){
  console.log(req.session.isLogin);
  if(!req.session.isLogin) {
    console.log("User not loged in");
    res.redirect("/login");
  }
  console.log("Next urls will go");
  next();
});
//add route midleware
app.use('/', indexRouter);
app.use('/pets', petsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
