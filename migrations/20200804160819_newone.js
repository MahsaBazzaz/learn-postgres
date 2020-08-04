exports.up = function(knex) {
    return Promise.all([
        knex.schema.
        createTable('persons',table =>{
            table.increments('id').primary();
            table.string('firstName');
            table.string('lastName');
            table.integer('age');
            
        })
        .createTable('animals', table => {
          table.increments('id').primary();
          table.string('name');
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
  