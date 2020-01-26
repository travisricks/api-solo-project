module.exports = (knex, UserMessage) => {
  return params => {
    const { fromId, toId, message } = params;
    return knex("user_messages")
      .insert({
        to_id: toId,
        message: message,
        from_id: fromId
      })
      .then(() => {
        return knex("user_messages")
          .innerJoin("users", { "user_messages.from_id": "users.id" })
          .select("user_messages.*", "users.username AS from");
      })

      .then(user_messages => {
        const result = user_messages.map(value => {
          return new UserMessage(value);
        });
        return result;
      }) // create a user model out of the plain database response
      .catch(err => {
        // sanitize known errors
        if (
          err.message.match("duplicate key value") ||
          err.message.match("UNIQUE constraint failed")
        )
          return Promise.reject(new Error("That user already exists"));

        // throw unknown errors
        return Promise.reject(err);
      });
  };
};
