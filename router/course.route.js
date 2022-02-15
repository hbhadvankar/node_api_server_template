var express = require('express');
var logger = require('../conf/loggerConfig');
var router = express.Router();

var controller = require('../controllers/course.controller')
//var auth = require('../service/auth')
router.get('/courses', controller.getCourses);
router.post('/registerCourse', controller.postCourse);


module.exports = router;