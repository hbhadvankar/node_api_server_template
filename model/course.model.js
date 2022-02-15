var mongoose = require('mongoose');

var courseSchema = mongoose.Schema({
        Name: {
           type: String
        },
        Duration: {
                Tenure: {
                type: Number
            },
            Unit: {
                type: String
            }
        },
        Fees: {
            Amount: {
                type: Number
            },
            Unit: {
                type: String
            }
        },
        Students:[{
                         type : mongoose.Schema.Types.ObjectId,
                         ref: 'student'
                     }]
}, {
    timestamps: true
});





module.exports = mongoose.model('course', courseSchema);