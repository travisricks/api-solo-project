module.exports = (knex, User) => {
  return () => {
    return Promise.resolve([]).then(() => {
      const result = knex.select().from("users");
      return result.map(x => {
        return new User(x);
      });
    });
  };
};
