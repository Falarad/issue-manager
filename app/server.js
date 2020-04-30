var express = require('express');
var app = express();
var issues = require('../node_modules/issue-manager');
var path = require('path');

var issueRouter = require('../routes/issues');
var usersRouter = require('../routes/users');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use('/', issueRouter);
app.use('/users', usersRouter);

app.listen(3000);