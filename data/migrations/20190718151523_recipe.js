
exports.up = function(knex) {
  //receipe


  return knex.schema.createTable('receipe', tbl =>{
        tbl.increments();

        tbl
            .string('receipe_name', 128)
            .unique()
            .notNullable();
    })

    .createTable('ingredient', tbl =>{
        tbl.increments();

        tbl
            .string('ingredient_name', 128)
            .unique()
            .notNullable();
    })

    .createTable('receipe_ingredients', tbl =>{
        tbl.increments();

        tbl
            .string('ingredient_id', 128)
            .notNullable()
            .references('id')
            .inTable('ingredient')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        tbl
            .string('receipe_id', 128)
            .notNullable()
            .references('id')
            .inTable('receipe')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');

        tbl.string('amount', 128);
    })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('receipe')
  .dropTableIfExists('ingredient')
  .dropTableIfExists('recipe_ingredients')
};
