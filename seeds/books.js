
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('books').del()
    .then(function () {
      // Inserts seed entries
      return knex('books').insert([
        {title: 'first book',description:'this is first one',author:'mahsa',price:20000},
        {title: 'second book',description:'this is second one',author:'mh',price:20000},
        {title: 'third book',description:'this is third one',author:'maryam',price:20000},
        {title: 'fourth book',description:'this is fouth one',author:'morteza',price:20000},
      
      ]);
    });
};
