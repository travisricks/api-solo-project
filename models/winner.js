const { Model } = require("objection");
const knex = require("knex");

const KnexConfig = require("../knexfile");

Model.knex(knex(KnexConfig));

class Winner extends Model {
  static get tableName() {
    return "winners";
  }
}

module.exports = Winner;
