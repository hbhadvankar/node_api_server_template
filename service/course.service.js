var utils = require('../utils/utils')
var courseDB = require('../db/course.db')
var logger = require('../conf/loggerConfig');

exports.postCourse = function (req, res) {
  return new Promise(function (resolve, reject) {
      logger.info("In post Course service. ")
      var course = {};
      course.Name = req.body.Name
      course.Duration = req.body.Duration
      course.Fees = req.body.Fees
      logger.info("The Object = ", JSON.stringify(course))
      courseDB.saveCourse(course).then((result) => {
              resolve(result);
          },
              (error) => {
                  reject(error)
              }
      );
  })
}

exports.getCourses = function (req, res) {
  return new Promise(function (resolve, reject) {
      logger.info("In get Courses service. ")

      courseDB.getCourses().then((result) => {
              resolve(result);
          },
              (error) => {
                  reject(error)
              }
      );
  })
}