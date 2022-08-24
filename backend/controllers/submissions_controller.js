// DEPENDENCIES
const submissions = require('express').Router()
const db = require('../models')
const { Submission } = db

// FIND ALL SUBMISSIONS
submissions.get('/', async (req, res) => {
    try {
        const foundSubmission = await Submission.findAll()
        console.log(JSON.stringify(foundSubmission))
        res.status(200).json(foundSubmissions)
    } catch (error) {
        res.status(500).json(error)
    }
})

// FIND SPECIFIC SUBMISSION
submissions.get('/:id', async (req, res) => {
    try {
        const foundSubmission = await Submission.findOne({
            where: { submission_id: req.params.id }
        })
        res.status(200).json(foundSubmission)
    } catch (error) {
        res.status(500).json(error)
    }
})

// CREATE SUBMISSION
submissions.post('/', async (req, res) => {
    try {
        console.log(req.body)
        const newSubmission = await Submission.create(req.body)
        res.status(200).json({
            message: 'Successfully created new submission',
            data: newSubmission
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// UPDATE A SUBMISSION
submissions.put('/:id', async (req, res) => {
    try {
        const updatedSubmissions = await Submission.update(req.body, {
            where: {
                submission_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedSubmissions}`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// DELETE SUBMISSION
submissions.delete('/:id', async (req, res) => {
    try {
        const deletedSubmissions = await Submission.destroy({
            where: {
                submission_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedSubmissions}`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// EXPORT
module.exports = submissions