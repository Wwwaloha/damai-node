var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var flash = require('connect-flash');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login');
var registerRouter = require('./routes/register')
var detailRouter = require('./routes/detail');
var userInfoRouter = require('./routes/userInfo');
var orderManageRouter = require('./routes/orderManage');
var searchRouter = require('./routes/search');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//session和flash配置
app.use(session({
  secret: 'first_cookie',
  cookie: {maxAge: 60000},
  resave: false,
  saveUninitialized: true
}));
app.use(flash());
app.use(function (req, res, next) {
    res.locals.errors = req.flash('error');
    res.locals.infos = req.flash('info');
    next();
});

app.use('/index', indexRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter);
app.use('/register',registerRouter)
app.use('/detail',detailRouter);
app.use('/userInfo',userInfoRouter);
app.use('/orderManage',orderManageRouter);
app.use('/search',searchRouter)

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
