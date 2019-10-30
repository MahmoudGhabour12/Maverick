const mongoose = require('mongoose')
 
const Quiz = mongoose.model('Quiz', {
    quiz_name: {
        type: String,
         trim: true,
         min:10,
         max:100
    },
    quiz_images: {
        type: String,
        trim: true,
        min:10,
        max:100
    },
    quiz_title: {
        type: String,
        trim: true,
        min:10,
        max:100
    },
    quiz_description: {
        type: String,
        trim: true,
        min:10,
        max:100
    }
})

module.exports = Quiz