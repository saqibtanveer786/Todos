const express = require('express')
const { body } = require('express-validator')
const router = express.Router()
const Notes = require('../modals/Notes')
const mongoose = require('mongoose')
const fetchid = require('../middleware/fetchid')
const { update } = require('../modals/Users')


//Route 1 : For adding a note. Login required
router.post('/addnote', fetchid,
  body('title').exists(),
  body('description').isLength({ min: 5 }),
  body('tag').isLength({ min: 3 }),
  async (req, res) => {
    const { title, description, tag } = req.body
    let note = await new Notes({
      title: title,
      description: description,
      tag: tag,
      user: req.user.id
    })
    await note.save()
    res.json(note)
  })


//Route 2 : For fetching all notes. Login required
router.get('/fetchnote', fetchid, async (req, res) => {
  const allnotes = await Notes.find({ user: req.user.id })
  res.json(allnotes)
})


//Route 3 : For deleting a note. Login required
router.delete('/deletenote', fetchid, async (req, res) => {
  const note = await Notes.findByIdAndDelete(req.params.id)
  res.send({ 'Sucess': 'Deleted' })
})



//Route 4 : For updating a note. Login required
router.delete('/updatenote', fetchid, async (req, res) => {
  const { title, description, tag } = req.body
  const updatednote = { title: title, description: description, tag: tag, user: req.user.id }
  Notes.findByIdAndUpdate(req.user.id, updatednote, { new: true })

    .then((value) => {
      console.log(value)
      res.json(value)
    }).catch((error) => {
      console.log(error)
    })

})


module.exports = router