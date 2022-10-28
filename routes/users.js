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

   

router.get('/vote', (req, res) => {
  res.render('form')
})

router.post('/vote', (req, res) => {
  // db.updateRoles(roles)
  //   .then(() => {
  //     res.redirect('/index')
  //   })
  //   .catch((err) => {
  //     console.error(err)
  //   })
  res.redirect('/')
})
module.exports = router