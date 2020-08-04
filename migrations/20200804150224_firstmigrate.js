
exports.up = function(knex) {
  return Promise.all([
      knex.schema.
      createTable('persons',table =>{
          table.increments('id').primary()
      })
      .createTable('animals', table => {
        table.increments('id').primary()
      })
  ])
  
};

exports.down = function(knex) {
  return Promise.all([
      knex.schema
      .dropTable('persons')
      .dropTable('animals')

  ])
};
