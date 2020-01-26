/*
The first migration. Notice the filename is prefixed with the timestamp of the time the
migration was created. This is so we can keep track of the order of migrations.

To run all migrations, you can also run `knex migrate:latest` from the services/db folder.
To roll back the migrations you just ran, you can use `knex migrate:rollback`
*/

exports.up = function(knex, Promise) {
  // create the 'winners' table with three columns
  return knex.schema.createTable("winners", t => {
    t.increments() // auto-incrementing id column
      .index(); // index this column

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
