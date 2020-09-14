const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const firebase = require('firebase')

const config = {
    apiKey: "AIzaSyAme8EcznDTo_MKkY9TQaMa_XXnuEq0dDs",
    authDomain: "rubicamp-go-12890.firebaseapp.com",
    databaseURL: "https://rubicamp-go-12890.firebaseio.com",
    projectId: "rubicamp-go-12890",
    storageBucket: "rubicamp-go-12890.appspot.com",
    messagingSenderId: "612307324185"
  };
firebase.initializeApp(config);



const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
