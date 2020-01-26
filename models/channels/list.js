module.exports = (knex, Channel) => {
  return () => {
    return Promise.resolve([]).then(() => {
      const result = knex.select().from("channels");
      return result.map(x => {
        return new Channel(x);
      });
    });
  };
};
