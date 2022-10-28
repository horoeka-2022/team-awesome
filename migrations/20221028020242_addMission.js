exports.up = function (knex) {
  return knex.schema.table('users', (table) => {
    table.string('mission')
  })
}

exports.down = function (knex) {
  return knex.schema.dropColumn('mission')
}
