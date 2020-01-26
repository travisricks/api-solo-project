const validateUsername = uName =>
  typeof uName === "string" && uName.replace(" ", "").length > 2;

module.exports = (knex, User) => {
  return params => {
    const username = params.username;

    if (!validateUsername(username)) {
      return Promise.reject(
        new Error("Username must be provided, and be at least two characters")
      );
    }

    return knex("users")
      .insert({ username: username.toLowerCase() })
      .then(() => {
        return knex("users")
          .where({ username: username.toLowerCase() })
          .select();
      })
      .then(users => new User(users.pop())) // create a user model out of the plain database response
      .catch(err => {
        // sanitize known errors
        if (
          err.message.match("duplicate key value") ||
          err.message.match("UNIQUE constraint failed")
        )
          return Promise.reject(new Error("That username already exists"));

        // throw unknown errors
        return Promise.reject(err);
      });
  };
};
