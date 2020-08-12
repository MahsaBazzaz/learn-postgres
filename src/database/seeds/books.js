
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('books').del()
    .then(function () {
      // Inserts seed entries
      return knex('books').insert([
        {title: '1at book',description:'this is 1 one',author:'mahsa',price:10000},
        {title: '2nd book',description:'this is 2 one',author:'mh',price:20000},
        {title: '3rd book',description:'this is 3 one',author:'maryam',price:30000},
        {title: '4th book',description:'this is 4 one',author:'alireza',price:40000},
        {title: '5th book',description:'this is 5 one',author:'matin',price:50000},
        {title: '6th book',description:'this is 6 one',author:'mahsa',price:60000},
        {title: '7th book',description:'this is 7 one',author:'morteza',price:70000},
      
      ]);
    });
};
