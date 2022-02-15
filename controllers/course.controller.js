
var courseService = require('../service/course.service');
var logger = require('../conf/loggerConfig');

module.exports.postCourse = function postStudent (req, res, next) {
  logger.info("in controller /postCourse")
      courseService.postCourse(req, res).then(function (result) {
        res.status(200).json(result)
  }).catch(function (result) {
        res.status(400).json(result)
  });

};

module.exports.getCourses = function getCourses (req, res, next) {
  logger.info("in controller /getCourses")
      courseService.getCourses(req, res).then(function (result) {
        res.status(200).json(result)
  }).catch(function (result) {
        res.status(400).json(result)
  });

};