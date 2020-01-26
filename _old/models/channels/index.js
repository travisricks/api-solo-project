const moment = require("moment");

const Channel = function(dbChannel) {
  this.id = dbChannel.id;
  this.name = dbChannel.name;
};

Channel.prototype.serialize = function() {
  return {
    id: this.id,
    name: this.name
  };
};

module.exports = knex => {
  return {
    create: require("./create")(knex, Channel),
    list: require("./list")(knex, Channel)
  };
};
