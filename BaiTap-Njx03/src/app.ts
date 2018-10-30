let createError = require('http-errors');
import * as express from "express";
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');
const indexRouter = require('./routes/index');
const petsRouter = require('./routes/pets');
const loginRouter = require('./routes/login');

const app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
// config session
const sess = {
  secret: 'keyboard cat',
  cookie: {},
};
// use session midleware
app.use(session(sess));
app.use('/', loginRouter);
// login midleware
app.use((req:any, res:any, next:any) => {
  console.log(req.session.isLogin);
  if (!req.session.isLogin) {
    console.log('User not loged in');
    res.redirect('/login');
  }
  console.log('Next urls will go');
  next();
});
// add route midleware
app.use('/', indexRouter);
app.use('/pets', petsRouter);

// catch 404 and forward to error handler
app.use((next:any) => {
  next(createError(404));
});

// error handler
app.use((err:any, req:any, res:any) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
