var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
var StudentModel = require('../model/student.model');
var logger = require('../conf/loggerConfig');

// Connecting to database
/*var query = 'mongodb+srv://Username:<password>'
    + '@student.tuufn.mongodb.net/College?'
    + 'retryWrites=true&w=majority'

const db = (query);
mongoose.Promise = global.Promise;

mongoose.connect(db, { useNewUrlParser : true,
useUnifiedTopology: true }, function(error) {
    if (error) {
        logger.info("Error!" + error);
    }
});*/


exports.saveStudent = function (student) {
    return new Promise((resolve, reject) => {
        //StudentModel.create(student, )
        StudentModel.create(student, (err, newStudent) => {
            if (err) {
                logger.info('Error when creating in object %j', err);
                reject({
                    message: "Internal Server Error",
                    httpStatusCode: 500
                })
                return;
            } else {
                logger.info("the new student"+JSON.stringify(newStudent));
                resolve({
                    message: "Success",
                    state: "CREATED",
                    httpStatusCode: 201
                })
            }
        });
        //logger.info("the random string"+x);
        //resolve(x);
    })
}

exports.enrollCourse = function (rollNumber, courseId) {
    return new Promise((resolve, reject) => {
        logger.info("in enrollCourse db");
        StudentModel.findOne({Roll:rollNumber}).exec((err, data)=>{
                        if(err){
                            reject(err.message);
                        }
                        else{

                            logger.info("Data from find() - "+JSON.stringify(data));
                            logger.info("course from find() - "+JSON.stringify(courses));
                            var courseObject = mongoose.Types.ObjectId(courseId);
                            logger.info("course Object - "+JSON.stringify(courseObject));
                            var courses = [];
                            if (data.Courses == undefined){
                                courses.push(courseObject)
                                data.Courses = courses
                            } else {
                                data.Courses.push(courseObject)
                            }

                            logger.info("course from find() after append - "+JSON.stringify(courses));
                            var studentObj = new StudentModel(data);
                            studentObj.save(function(err,result){
                                if (err){
                                    logger.info(err);
                                    reject(err.message);
                                }
                                else{
                                    logger.info("Courses Enrolled!!");
                                    resolve(result);
                                }
                            })
                        }
                    })
    })
}

exports.getAllCourses = function (rollNumber) {
    return new Promise((resolve, reject) => {
        logger.info("in enrollCourse db");
        StudentModel.find({Roll:rollNumber}).populate("Courses","-Students").exec((err, data)=>{
                        if(err){
                            reject(err.message);
                        }
                        else{

                            logger.info("Data from find() - "+JSON.stringify(data));
                            resolve(data);

                        }
                    })
    })
}