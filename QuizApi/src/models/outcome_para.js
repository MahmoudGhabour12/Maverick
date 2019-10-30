const mongoose = require('mongoose')
 
const Outcome_para = mongoose.model('Outcome_para', {
    outcome_title: {
        type: String,
        min:10,
        max:100,
        trim: true
    },
    outcome_para:{
        type: String,
        min:10,
        max:1000,
        trim: true
    }
    
})

module.exports = Outcome_para