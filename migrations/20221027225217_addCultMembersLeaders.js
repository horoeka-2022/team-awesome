exports.up = function (knex) {
  return knex.schema.table('users', (table) => {
    table.string('party')
    table.string('roles')
  })
}

exports.down = function (knex) {
  return knex.schema.dropColumns('party', 'roles')
}
