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

  // getWinners({}) {
  //   olympics.select('*').from('winners')
  //   .then(items => {
  //     if(items.length){
  //       res.json(items)
  //     } else {
  //       res.json({dataExists: 'false'})
  //     }
  //   })
  //   .catch(err => res.status(400).json({dbError: 'db error'}))
  // }
};
