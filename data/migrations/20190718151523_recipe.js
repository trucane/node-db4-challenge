
exports.up = function(knex) {
  //recipe


  return knex.schema.createTable('recipe', tbl =>{
        tbl.increments();

        tbl
            .string('recipe_name', 128)
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

    .createTable('recipe_ingredients', tbl =>{
        tbl.increments();

        tbl
            .string('ingredient_id', 128)
            .notNullable()
            .references('id')
            .inTable('ingredient')
            .onUpdate('CASCADE')
            .onDelete('RESTRICT');
        tbl
            .string('recipe_id', 128)
            .notNullable()
            .references('id')
            .inTable('recipe')
            .onUpdate('CASCADE')
            .onDelete('RESTRICT');

        tbl.string('amount', 128);
    })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('recipe')
  .dropTableIfExists('ingredient')
  .dropTableIfExists('recipe_ingredients')
};
