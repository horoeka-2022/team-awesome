const express = require('express')

const db = require('../db')

const router = express.Router()

// router.get('/', (req, res) => {
//   db.getUsers()
//     .then((users) => {
//       res.render('index', { users: users })
//     })
//     .catch((err) => {
//       res.status(500).send('DATABASE ERROR: ' + err.message)
//     })
// })

router.get('/', (req, res) => {
  res.render('index')
})

router.get('/:party', async (req, res) => {
  try {
    const party = req.params.party
    const members = await db.getPartyMembers(party)
    const leader = await db.getLeader(party)
    const viewData = {
      leader: leader,
      members: members,
    }
    console.log(viewData)
    res.render(viewData)
  } catch (error) {
    console.error(error.message)
  }
})

module.exports = router
