module.exports = (knex, ChannelMessage) => {
  return params => {
    return Promise.resolve([]).then(() => {
      const result = knex("channel_messages")
        .join("users", { "channel_messages.from_id": "users.id" })
        .join("channels", { "channel_messages.channel_id": "channels.id" })
        .select(
          "channel_messages.*",
          "users.username AS from",
          "channels.name AS to"
        )
        .where("channel_messages.channel_id", params.channelId);
      return result.map(x => {
        return new ChannelMessage(x);
      });
    });
  };
};
