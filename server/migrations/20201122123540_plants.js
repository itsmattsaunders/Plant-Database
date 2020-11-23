
exports.up = function(knex) {
  return knex.schema.createTable('plants', table => {
  table.increments('id').primary()
  table.string('plant_name')
  table.string('description')
  table.integer('height')
  table.string('type')
  table.string('image')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('plants')
};
