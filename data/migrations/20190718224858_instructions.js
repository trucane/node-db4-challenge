
exports.up = function(knex) {
  return knex.schema.createTable('instructions', tbl =>{
      tbl.increments();

      
      tbl.string('receipe_id')
      .notNullable()
      .references('id')
      .inTable('receipe')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')

      tbl.string('step', 250)
      .notNullable();

      tbl.decimal('step_order');
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('instructions');
};
