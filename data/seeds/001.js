
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('receipe', 'ingredient', 'receipe_ingredients').truncate()
    .then( () => {
      // Inserts receipe entries
      return knex('receipe').insert([
        {receipe_name: 'Cheesecake'},
        {receipe_name: 'Hamburger'},
        {receipe_name: 'Martini'},
        {receipe_name: 'Spaghetti'}
      ]);
    })
    .then( () => {
      // Inserts ingredient entries
      return knex('ingredient').insert([
        {ingredient_name: 'sugar'},
        {ingredient_name: 'butter'},
        {ingredient_name: 'olive'},
        {ingredient_name: 'ground chuck'},
        {ingredient_name: 'tomatoe'},
        {ingredient_name: 'salt'},
      ]);
    })
    .then( () => {
      // Inserts receipe_ingredients entries
      return knex('receipe_ingredients').insert([
        {ingredient_id: 1, receipe_id:1, amount: '1 cup'},
        {ingredient_id: 2, receipe_id:1, amount: '1 cup'},
        {ingredient_id: 6, receipe_id:1, amount: '1 tsp'},

        {ingredient_id: 4, receipe_id:2, amount: '1 lb'},
        {ingredient_id: 5, receipe_id:2, amount: '1 oz'},
        {ingredient_id: 6, receipe_id:2, amount: '1 tsp'},
      ]);
    })
};
