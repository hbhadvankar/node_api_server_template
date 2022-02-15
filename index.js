var express = require('express');
var app = express();
var http = require('http');
var bodyParser = require('body-parser');
var logger = require('./conf/loggerConfig')

const cors = require('cors');
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const serverPort = 8080

var path = require('path');

function addHeaders(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  next()
}


function addHeaders(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  next()
}

var studentRouter = require('./router/student.route')
var courseRouter = require('./router/course.route')

require('./model/db')();

function addHeaders(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  next()
}

app.use('/v1', addHeaders, studentRouter);
app.use('/v1', addHeaders, courseRouter);

http.createServer(app).listen(serverPort, function () {
  logger.info('Swagger-ui is available on http://localhost:%d/docs', serverPort);
  logger.info("Express server listening on port " + serverPort);
});
