exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("winners")
    .del()
    .then(() => {
      // Inserts seed entries
      return knex("winners").insert([
        {
          city: "Athens",
          edition: 1896,
          category: "Aquatics",
          sport: "Swimming",
          athlete: "HAJOS, Alfred",
          noc: "HUN",
          gender: "Men",
          event: "100m freestyle",
          medal: "Gold"
        },
        {
          city: "Athens",
          edition: 1896,
          category: "Aquatics",
          sport: "Swimming",
          athlete: "HERSCHMANN, Otto",
          noc: "AUT",
          gender: "Men",
          event: "100m freestyle",
          medal: "Silver"
        },
        {
          city: "Athens",
          edition: 1896,
          category: "Aquatics",
          sport: "Swimming",
          athlete: "DRIVAS, Dimitrios",
          noc: "GRE",
          gender: "Men",
          event: "100m freestyle for sailors",
          medal: "Bronze"
        },
        {
          city: "Athens",
          edition: 1896,
          category: "Aquatics",
          sport: "Swimming",
          athlete: "MALOKINIS, Ioannis",
          noc: "GRE",
          gender: "Men",
          event: "100m freestyle for sailors",
          medal: "Gold"
        },
        {
          city: "Athens",
          edition: 1896,
          category: "Aquatics",
          sport: "Swimming",
          athlete: "CHASAPIS, Spiridon",
          noc: "GRE",
          gender: "Men",
          event: "100m freestyle for sailors",
          medal: "Silver"
        },
        {
          city: "Athens",
          edition: 1896,
          category: "Aquatics",
          sport: "Swimming",
          athlete: "CHOROPHAS, Efstathios",
          noc: "GRE",
          gender: "Men",
          event: "1200m freestyle",
          medal: "Bronze"
        },
        {
          city: "Athens",
          edition: 1896,
          category: "Aquatics",
          sport: "Swimming",
          athlete: "HAJOS, Alfred",
          noc: "HUN",
          gender: "Men",
          event: "1200m freestyle",
          medal: "Gold"
        },
        {
          city: "Athens",
          edition: 1896,
          category: "Aquatics",
          sport: "Swimming",
          athlete: "ANDREOU, Joannis",
          noc: "GRE",
          gender: "Men",
          event: "1200m freestyle",
          medal: "Silver"
        },
        {
          city: "Athens",
          edition: 1896,
          category: "Aquatics",
          sport: "Swimming",
          athlete: "CHOROPHAS, Efstathios",
          noc: "GRE",
          gender: "Men",
          event: "400m freestyle",
          medal: "Bronze"
        },
        {
          city: "Athens",
          edition: 1896,
          category: "Aquatics",
          sport: "Swimming",
          athlete: "NEUMANN, Paul",
          noc: "AUT",
          gender: "Men",
          event: "400m freestyle",
          medal: "Gold"
        }
      ]);
    });
};
