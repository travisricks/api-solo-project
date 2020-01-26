module.exports = function(knex) {
  return {
    users: require("./users")(knex),
    channels: require("./channels")(knex),
    channelMessages: require("./channelMessages")(knex),
    userMessages: require("./userMessages")(knex)
  };
};
