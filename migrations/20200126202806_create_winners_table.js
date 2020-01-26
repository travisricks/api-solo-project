exports.up = function(knex, Promise) {
  // create the 'winners' table with three columns
  return knex.schema.createTable("winners", t => {
    t.increments("id")
      .primary()
      .unsigned(); // auto-incrementing id column

    t.string("city", 25); // city of the games

    t.integer("edition"); // year of the games

    t.string("category", 25); // category

    t.string("sport", 25); // sport

    t.string("athlete", 50); // athlete name
    t.string("noc", 3); // country code
    t.string("gender", 5); // athlete gender code
    t.string("event", 50); // sport event name
    t.string("medal", 10); // medal won
  });
};

exports.down = function(knex, Promise) {
  // undo this migration by destroying the 'winners' table
  return knex.schema.dropTable("winners");
};
