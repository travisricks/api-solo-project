const knex = require("knex")(require("./knexfile"));

module.exports = {
  addWinner({
    city,
    edition,
    category,
    sport,
    athlete,
    noc,
    gender,
    event,
    medal
  }) {
    console.log(`Add winner: ${athlete}`);
    return knex("winners").insert({
      city,
      edition,
      category,
      sport,
      athlete,
      noc,
      gender,
      event,
      medal
    });
  }
};
