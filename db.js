const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getUser: getUser,
  getUsers: getUsers,
  getPartyMembers,
  getLeader,
  // voteForLeader: voteForLeader,
}

function getUsers(db = connection) {
  return db('users').select()
}

function getUser(id, db = connection) {
  return db('users').where('id', id).first()
}

function getPartyMembers(party, db = connection) {
  return db('users').where('party', party).where('roles', 'member')
}

function getLeader(party, db = connection) {
  return db('users').where('roles', 'leader').where('party', party).first()
}

// function changeParty(users, db = connection) {
//   return db('users').where({ users.party }).update({
//     party: updatedLocation.name,
//     description: updatedLocation.description,
//   })
// }
