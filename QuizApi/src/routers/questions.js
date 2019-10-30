const express = require('express')
const Question = require('../models/questions')
const router = new express.Router()

router.post('/questions', async (req, res) => {
    const question = new Question(req.body)

    try {
        await question.save()
        res.status(201).send(question)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/questions', async (req, res) => {
    try {
        const question = await Question.find({})
        res.send(question)
    } catch (e) {
        res.status(500).send()
    }
})


module.exports = router