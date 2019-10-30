const express = require('express')
require('./db/mongoose')
const cors = require('cors')
const multer = require('multer');
const quizrouter = require('./routers/quiz')
const questionsrouter = require('./routers/questions')
const outcome_urlsrouter = require('./routers/outcome_url')
const outcome_pararouter = require('./routers/outcome_para')

const app = express()
app.use(cors())
const port = process.env.PORT || 3000

app.use(express.json())
app.use(quizrouter)
app.use(questionsrouter)
app.use(outcome_pararouter)
app.use(outcome_urlsrouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})
