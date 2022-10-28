const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getUser: getUser,
  getUsers: getUsers,
  getPartyMembers,
  getLeader,
}

function getUsers(db = connection) {
  return db('users').select()
}

function getUser(id, db = connection) {
  return db('users').where('id', id).first()
}

function getPartyMembers(party, db = connection) {
  return db('users').where('party', party)
}

function getLeader(db = connection) {
  return db('users').where('roles', 'leader')
}
