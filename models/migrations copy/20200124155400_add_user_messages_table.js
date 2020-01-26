exports.up = function(knex, Promise) {
  // create the 'user messages' table with five columns
  return knex.schema.createTable("user_messages", t => {
    t.increments() // auto-incrementing id column
      .index(); // index this column

    // from_id = foreign key from users
    t.integer("from_id")
      .unsigned()
      .references("users.id");

    // to_id = foreign key from users
    t.integer("to_id")
      .unsigned()
      .references("users.id");

    t.string("message", 140) // maximum length of 140 characters (aka tweet length)
      .notNullable() // add a not-null constraint to this column
      .index(); // index it

    t.timestamp("sent_at")
      .notNullable()
      .defaultTo(knex.fn.now()); // default to the current time
  });
};

exports.down = function(knex, Promise) {
  // undo this migration by destroying the 'user messages' table
  return knex.schema.dropTable("user_messages");
};
