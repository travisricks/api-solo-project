module.exports = (knex, UserMessage) => {
  return params => {
    return Promise.resolve([]).then(() => {
      const result = knex("user_messages")
        .innerJoin("users", { "user_messages.from_id": "users.id" })
        .select(
          "user_messages.*",
          "users.username AS from",
          "users.username AS to"
        )
        .where({
          "user_messages.from_id": params.fromId,
          "user_messages.to_id": params.toId
        })
        .orWhere({
          "user_messages.from_id": params.toId,
          "user_messages.to_id": params.fromId
        });
      return result.map(x => {
        const msg = new UserMessage(x);
        return msg;
      });
    });
  };
};
