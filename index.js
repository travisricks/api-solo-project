const express = require("express");
const bodyParser = require("body-parser");
// const knex = require("knex")(require("./knexfile"));
const store = require("./store");
const app = express();
const Winner = require("./models/Winner");
app.use(express.static("public"));
app.use(bodyParser.json());

app.get("/api/winners", (req, res) => {
  Winner.query().then(winners => {
    res.json(winners);
  });
});
app.get("/api/winners/:a", (req, res) => {
  Winner.query().then(winners => {
    const results = res.json(winners);
    // console.log(results);
    // const filtered = results.filter(value => value.noc === req.params.a);
    return results;
  });
});
app.post("/addWinner", (req, res) => {
  store
    .addWinner({
      city: req.body.city,
      edition: req.body.edition,
      category: req.body.category,
      sport: req.body.sport,
      athlete: req.body.athlete,
      noc: req.body.noc,
      gender: req.body.gender,
      event: req.body.event,
      medal: req.body.medal
    })
    .then(() => res.sendStatus(200));
});
app.listen(3000, () => {
  console.log(`Server running on localhost:3000`);
});
