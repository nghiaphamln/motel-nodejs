const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const expressLayouts = require('express-ejs-layouts');
const passport = require('passport');
const favicon = require('serve-favicon');

// Router
const homeRouter = require('./routes/home.route');
const userRouter = require('./routes/user.router')

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(expressLayouts);

app.use('/', homeRouter);
app.use('/user', userRouter);


app.use(passport.initialize());
app.use(passport.session());



app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res) {
  res['locals']['message'] = err['message'];
  res['locals']['error'] = req.app.get('env') === 'development' ? err : {};

  res['status'](err['status'] || 500);
  res['render']('error');
});

module.exports = app;
