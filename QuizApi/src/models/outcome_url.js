const mongoose = require('mongoose')
 
const Outcome_url = mongoose.model('Outcome_url', {
    outcome_title: {
        type: String,
        min:10,
        max:100,
        trim: true
    },
    outcomeurl: {
        type: String,
        min:10,
        max:1000,
        trim: true
    },
    check_url:{
        type:Boolean
    }
    
})

module.exports = Outcome_url