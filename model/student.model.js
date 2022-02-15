var mongoose = require('mongoose');

var studentSchema = mongoose.Schema({
        Name: {
           type: String
        },
        Roll: {
            type: Number
        },
        Birthday: {
            type: Date
        },
        Address: {
             type: String
        },
        Courses:[{
                         type : mongoose.Schema.Types.ObjectId,
                         ref: 'course'
                     }]
}, {
    timestamps: true
});





module.exports = mongoose.model('student', studentSchema);