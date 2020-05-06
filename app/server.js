var express = require('express');
var app = express();
var issues = require('../node_modules/issue-manager');
var path = require('path');
var jade = require('jade');
var bodyParser = require('body-parser');



var issueRouter = require('../routes/issues');
var usersRouter = require('../routes/users');

app.use(bodyParser.urlencoded({ extended: true })); 
app.set('views', '../views');
app.set('view engine', 'jade');
app.use('/', issueRouter);
app.use('/users', usersRouter);

app.listen(3000);
