
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe').insert([
        {recipe_name: 'Cheesecake'},
        {recipe_name: 'Hamburger'},
        {recipe_name: 'Martini'},
        {recipe_name: 'Spaghetti'}
      ]);
    });
};
