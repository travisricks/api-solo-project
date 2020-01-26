module.exports = (knex, channelMessage) => {
  return params => {
    const { fromId, channelId, message } = params;
    return knex("channel_messages")
      .insert({
        channel_id: channelId,
        message: message,
        from_id: fromId
      })
      .then(() => {
        return knex("channel_messages")
          .join("users", { "channel_messages.from_id": "users.id" })
          .join("channels", { "channel_messages.channel_id": "channels.id" })
          .select(
            "channel_messages.*",
            "users.username AS from",
            "channels.name AS to"
          );
      })

      .then(channel_messages => {
        const result = channel_messages.map(value => {
          return new channelMessage(value);
        });
        return result;
      }) // create a channel model out of the plain database response
      .catch(err => {
        // sanitize known errors
        if (
          err.message.match("duplicate key value") ||
          err.message.match("UNIQUE constraint failed")
        )
          return Promise.reject(new Error("That channel already exists"));

        // throw unknown errors
        return Promise.reject(err);
      });
  };
};
