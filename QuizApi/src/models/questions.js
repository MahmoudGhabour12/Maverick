const mongoose = require('mongoose')
 
const Question = mongoose.model('Question', {
    question_title: {
        type: String,
        min:10,
        max:100,
        trim: true
    },
    answer_type:{
        type: String,
        min:10,
        max:1000,
        trim: true
    },
    map_answer:{
        type: String,
        min:10,
        max:1000,
        trim: true
        }
    
})

module.exports = Question