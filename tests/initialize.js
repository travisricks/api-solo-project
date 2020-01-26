const config = require("../config");
const knex = require("knex")(config.db);

const ignoreError = () => {
  // do nothing
};

const clearTable = tableName =>
  knex(tableName)
    .del()
    .catch(ignoreError);

const tables = ["channel_messages", "user_messages", "users", "channels"];

Promise.all(tables.map(clearTable)).then(process.exit);
