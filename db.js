const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getUser: getUser,
  getUsers: getUsers,
  // voteForLeader: voteForLeader,
}

function getUsers(db = connection) {
  return db('users').select()
}

function getUser(id, db = connection) {
  return db('users').where('id', id).first()
}


// function changeParty(users, db = connection) {
//   return db('users').where({ users.party }).update({
//     party: updatedLocation.name,
//     description: updatedLocation.description,
//   })
// }