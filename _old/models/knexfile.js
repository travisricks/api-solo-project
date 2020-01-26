// Update with your config settings.
const config = require("../config");

module.exports = {
  client: "pg",
  connection: config.db.connection,
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: "knex_migrations",
    directory: "./migrations"
  },
  seeds: {
    tableName: "knex_seeds",
    directory: "./seeds"
  }
};
