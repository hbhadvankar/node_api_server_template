var express = require('express');
var logger = require('../conf/loggerConfig');
var router = express.Router();

var controller = require('../controllers/student.controller')
//var auth = require('../service/auth')
//router.get('/enterprise', controller.getAllEnterprise);
router.get('/get', controller.respond);
router.post('/registerStudent', controller.postStudent);
router.post('/enrollCourse', controller.enrollCourse);
router.get('/myCourse/:rollNo', controller.getAllCourses);


module.exports = router;