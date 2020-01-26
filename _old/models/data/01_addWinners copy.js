const data = require("../data/winners-2008.json");
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("winners")
    .del()
    .then(() => {
      // Inserts seed entries
      return knex("winners").insert(data[0]);
    });
};
