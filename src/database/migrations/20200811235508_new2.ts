exports.up = function(knex) {
    return Promise.all([
      knex.schema
       .dropTableIfExists('persons')
       .dropTableIfExists('books')
        .createTable('persons',table =>{
            table.increments('id').primary();
            table.string('firstName');
            table.string('lastName');
            table.integer('age');
            // table.specificType('books', 'text[]')
            
        })
        .createTable('books', table => {
          table.increments('id').primary();
          table.string('title');
          table.string('description');
          table.string('author');
          table.integer('price');
          
        })
    ])
    
  };

  exports.down = function(knex) {
    return Promise.all([
        knex.schema
        .dropTable('persons')
        .dropTable('books')
  
    ])
  };
  