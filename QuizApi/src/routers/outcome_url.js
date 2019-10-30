const express = require('express')
const Outcome_url = require('../models/outcome_url')
const router = new express.Router()

router.post('/outcomeurl', async (req, res) => {
    const outcome_url = new Outcome_url(req.body)

    try {
        await outcome_url.save()
        res.status(201).send(outcome_url)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/outcomeurl', async (req, res) => {
    try {
        const outcome_url = await Outcome_url.find({})
        res.send(outcome_url)
    } catch (e) {
        res.status(500).send()
    }
})


module.exports = router