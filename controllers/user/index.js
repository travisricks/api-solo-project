const express = require("express");

module.exports = models => {
  /**
   * Controller Logic
   */
  const createUser = (req, res) =>
    models.users
      .create({ username: req.body.username })
      .then(user => res.status(201).json(user.serialize()))
      .catch(err => {
        if (err.message === "That username already exists") {
          return models.users
            .get({ username: req.body.username })
            .then(user => res.status(200).json(user.serialize()));
        }

        return res.status(400).send(err.message);
      });

  const listUsers = (req, res) =>
    models.users
      .list()
      .then(users => users.map(user => user.serialize()))
      .then(users => res.status(200).json(users))
      .catch(err => res.status(400).send(err.message));

  const getUserMessages = (req, res) =>
    models.userMessages
      .list({ toId: req.params.id, fromId: req.query.fromId })
      .then(messages => messages.map(msg => msg.serialize()))
      .then(messages => res.status(200).json(messages))
      .catch(err => res.status(400).send(err.message));

  const createUserMessage = (req, res) =>
    models.userMessages
      .create({
        toId: req.params.id,
        fromId: req.body.fromId,
        message: req.body.message
      })
      .then(messages => messages.map(msg => msg.serialize()))
      .then(messages => res.status(200).json(messages))
      .catch(err => res.status(400).send(err.message));

  /**
   * Routes
   */
  const router = express.Router();
  router.post("/", createUser);
  router.get("/", listUsers);
  router.get("/:id/messages", getUserMessages);
  router.post("/:id/messages", createUserMessage);

  return router;
};
