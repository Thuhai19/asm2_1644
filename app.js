var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var userRouter = require('./routes/user');
var productRouter = require('./routes/product');
var homeRouter = require('./routes/home');

var app = express();

var mongoose = require("mongoose");
var uri = "mongodb+srv://thuhai01:12345@silverjewelry.ix84aqi.mongodb.net/ASM1644";
mongoose.connect(uri)
  .then(() => console.log("Connect to DB succeed !"))
  .catch((err) => console.log("Connect to DB fail"));

var hbs = require('hbs');
hbs.registerHelper('equal', require('handlebars-helper-equal'))

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', userRouter);
app.use('/product', productRouter);
app.use('/home', homeRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen (process.env.PORT || 3001);
module.exports = app;