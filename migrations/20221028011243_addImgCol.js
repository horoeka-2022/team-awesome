exports.up = function (knex) {
  return knex.schema.table('users', (table) => {
    table.string('img')
  })
}

exports.down = function (knex) {
  return knex.schema.dropColumn('img')
}
