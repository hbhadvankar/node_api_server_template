var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
var CourseModel = require('../model/course.model');
var logger = require('../conf/loggerConfig');

exports.saveCourse = function (course) {
    return new Promise((resolve, reject) => {
        CourseModel.create(course, (err, newCourse) => {
            if (err) {
                logger.info('Error when creating in object %j', err);
                reject({
                    message: "Internal Server Error",
                    httpStatusCode: 500
                })
                return;
            } else {
                logger.info("the new course"+JSON.stringify(newCourse));
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

exports.getCourses = function (course) {
    return new Promise((resolve, reject) => {
        CourseModel.find({},{Students:0}).exec((err, data)=>{
                if(err){
                    reject(err.message);
                }
                else{
                    resolve(data);
                }
            })
    })
}