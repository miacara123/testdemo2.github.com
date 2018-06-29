var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');

var indexRouter = require('./routes/index');
var subform = require('./routes/subform');
var usecookies = require('./routes/usecookies');
var usecrypto = require('./routes/usecrypto');
var usesession = require('./routes/usesession');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//  这里传入一个密钥加session id
app.use(cookieParser('Wilson'));
// 使用靠这个中间件
app.use(session({ secret:'wilson' }));

// 用户使用/访问时，调用indexRouter，即调用routes目录下的index.js文件
app.use('/', indexRouter);
app.use('/subform', subform);
app.use('/usecookies', usecookies);
app.use('/usecrypto', usecrypto);
app.use('/usesession', usesession);

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

app.listen(8000);

module.exports = app;
