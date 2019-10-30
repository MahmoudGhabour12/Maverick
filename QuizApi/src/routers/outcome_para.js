const express = require('express')
const Outcome_para = require('../models/outcome_para')
const router = new express.Router()

router.post('/outcompara', async (req, res) => {
    const outcome_para = new Outcome_para(req.body)

    try {
        await outcome_para.save()
        res.status(201).send(outcome_para)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/outcompara', async (req, res) => {
    try {
        const outcome_para = await Outcome_para.find({})
        res.send(outcome_para)
    } catch (e) {
        res.status(500).send()
    }
})


module.exports = router