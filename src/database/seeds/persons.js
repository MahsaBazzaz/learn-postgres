
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('persons').del()
    .then(function () {
      // Inserts seed entries
      return knex('persons').insert([
        {name: 'mahsa', family: 'bazzaz', age: 22 , city:"tehran",favorite:7},
        {name: 'mh', family: 'nd', age: 21,city:"mashhad",favorite:2},
        {name: 'maryam', family: 'oo', age: 46,city:"kish",favorite:3},
        {name: 'morteza', family: 'bzz', age: 54,city:"esfehan",favorite:4},
        {name: 'alireza', family: 'abed', age: 21,city:"karaj",favorite:5},
        {name: 'matin', family: 'elmi', age: 21,city:"ghom",favorite:6},
      ]);
    });
  
};
