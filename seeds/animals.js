
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('animals').del()
    .then(function () {
      // Inserts seed entries
      return knex('animals').insert([
        {name: 'cat'},
        {name: 'dog'},
        {name: 'rabbit'}
      
      ]);
    });
};
