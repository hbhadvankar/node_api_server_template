
var studentService = require('../service/student.service');
var logger = require('../conf/loggerConfig');

module.exports.respond = function developerLogin (req, res, next) {
  logger.info("in /get")
  studentService.getRandomName(req, res)
  .then(function (result) {
        res.status(200).json({
            token: "abcd",
            message: result
        })
  })
  .catch(function (result) {
        res.status(400).json({
            token: "abcd",
            message: result
        })
  });

};

module.exports.postStudent = function postStudent (req, res, next) {
  logger.info("in controller /postStudent")
      studentService.postStudent(req, res).then(function (result) {
        res.status(200).json(result)
  }).catch(function (result) {
        res.status(400).json(result)
  });

};

module.exports.enrollCourse = function enrollCourse (req, res, next) {
  logger.info("in controller /enrollCourse")
      studentService.enrollCourse(req, res).then(function (result) {
        res.status(200).json(result)
  }).catch(function (result) {
        res.status(400).json(result)
  });

};

module.exports.getAllCourses = function getAllCourses (req, res, next) {
  logger.info("in controller /getAllCourses")
      studentService.getAllCourses(req, res).then(function (result) {
        res.status(200).json(result)
  }).catch(function (result) {
        res.status(400).json(result)
  });

};

/*

module.exports.respond1 = function developerLogin (req, res, next) {
  EsimBatchAPI.developerLogin(req, res)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
*/
