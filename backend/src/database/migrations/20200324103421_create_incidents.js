exports.up = function(knex) {
  return knex.schema.createTable('incidents', function (table) {
    table.increments();
    table.string('title').notNullable();
    table.string('description').notNullable();
    table.decimal('value').notNullable();
    // Cria um relacionamento com o create_ongs
    table.string('ong_id').notNullable(); 
    // Toda vez em que o ong_id for preenchido, ele precisa ser um id que esteja cadastrado na tabela ong
    table.foreign('ong_id').references('id').inTable('ongs'); 
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('incidents');
};
