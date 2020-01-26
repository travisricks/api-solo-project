exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("winners")
    .del()
    .then(() => {
      // Inserts seed entries
      return knex("winners").insert([
        {
          id: 1,
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
          id: 2,
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
          id: 3,
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
          id: 4,
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
          id: 5,
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
          id: 6,
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
          id: 7,
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
          id: 8,
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
          id: 9,
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
          id: 10,
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
