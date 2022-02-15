var utils = require('../utils/utils')
var studentDB = require('../db/student.db')
var logger = require('../conf/loggerConfig');

exports.getRandomName = function (req, res) {
  return new Promise(function (resolve, reject) {
      utils.getRandomString().then((result) => {
              resolve(result);
          },
              (error) => {
                  reject(error)
              }
      );
  })
}

exports.postStudent = function (req, res) {
  return new Promise(function (resolve, reject) {
      logger.info("In post Student service. ")
      var student = {};
      student.Name = req.body.Name
      student.Roll = req.body.Roll
      student.Birthday = new Date(req.body.Birthday.Year,req.body.Birthday.Month-1,req.body.Birthday.Day);
      student.Address = req.body.Address
      logger.info("The Object = ", JSON.stringify(student))
      studentDB.saveStudent(student).then((result) => {
              resolve(result);
          },
              (error) => {
                  reject(error)
              }
      );
  })
}

exports.enrollCourse = function (req, res) {
  return new Promise(function (resolve, reject) {
      logger.info("In post enrollCourse service. ")
      var student = {};
      var rollNumber = req.body.Roll;
      var courseId = req.body.courseId;
      logger.info("The Object = ", JSON.stringify(req.body))
      studentDB.enrollCourse(rollNumber, courseId).then((result) => {
              resolve(result);
          },
              (error) => {
                  reject(error)
              }
      );
  })
}

exports.getAllCourses = function (req, res) {
  return new Promise(function (resolve, reject) {
      logger.info("In post getAllCourses service. ")
      var rollNumber = req.params.rollNo;
      studentDB.getAllCourses(rollNumber).then((result) => {
              resolve(result);
          },
              (error) => {
                  reject(error)
              }
      );
  })
}
