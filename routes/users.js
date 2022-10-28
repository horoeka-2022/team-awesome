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
   

    router.get('/party', (req, res) => {
      res.render('party')
    })

    router.get('/reptilian', (req, res) => {
      res.render('reptilian')
    })
   
module.exports = router