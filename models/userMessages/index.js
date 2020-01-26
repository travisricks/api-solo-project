const moment = require("moment");

const UserMessage = function(dbMessage) {
  this.id = dbMessage.id;
  this.fromUser = dbMessage.from;
  this.toUser = dbMessage.to;
  this.message = dbMessage.message;
  this.sentAt = new Date(dbMessage.sent_at);
};

UserMessage.prototype.serialize = function() {
  return {
    id: this.id,
    fromUser: this.fromUser,
    toUser: this.toUser,
    message: this.message,
    sentAt: moment(this.sentAt).fromNow()
  };
};

module.exports = knex => {
  return {
    create: require("./create")(knex, UserMessage),
    list: require("./list")(knex, UserMessage)
  };
};
