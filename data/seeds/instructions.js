
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {step: 'Crack an egg', receipe_id:'1', step_order:2},
        {step: 'Add tomatoe', receipe_id:'2', step_order:6},
        {step: 'Prep baking pan', receipe_id:'1', step_order:6},
        {step: 'Pan on medium high', receipe_id:'2', step_order:4},
        {step: 'Add cream cheese', receipe_id:'1', step_order:3},
        {step: 'Mix on medium for until fully incorporated', receipe_id:'1', step_order:5},
        {step: 'Add 1tsp vanilla', receipe_id:'1', step_order:4},
        {step: 'Add pepper', receipe_id:'2', step_order:5},
        {step: 'Cook on each side 4 mn', receipe_id:'2', step_order:3},
        {step: 'Add salt', receipe_id:'2', step_order:2},
        {step: 'Preheat over to 350°F', receipe_id:'1', step_order:1},
        {step: 'Add ground chuck to a bowl', receipe_id:'2', step_order:1},
      ]);
    });
};
