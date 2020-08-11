
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('persons').del()
    .then(function () {
      // Inserts seed entries
      return knex('persons').insert([
        {firstName: 'mahsa', lastName: 'bazzaz', age: 22},
        {firstName: 'mh', lastName: 'nd', age: 21},
        {firstName: 'maryam', lastName: 'oo', age: 46},
        {firstName: 'morteza', lastName: 'bzz', age: 54},
        {firstName: 'alireza', lastName: 'abed', age: 21},
      ]);
    });
};
