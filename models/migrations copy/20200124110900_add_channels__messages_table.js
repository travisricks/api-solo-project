exports.up = function(knex, Promise) {
  // create the 'channel messages' table with five columns
  return knex.schema.createTable("channel_messages", t => {
    t.increments() // auto-incrementing id column
      .index(); // index this column

    // channel_id = foreign key from channel
    t.integer("channel_id")
      .unsigned()
      .references("channels.id");

    // from_id = foreign key from users
    t.integer("from_id")
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
  // undo this migration by destroying the 'channel messages' table
  return knex.schema.dropTable("channel_messages");
};
