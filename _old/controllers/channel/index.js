const express = require("express");

module.exports = models => {
  /**
   * Controller Logic
   */
  const createChannel = (req, res) =>
    models.channels
      .create({ name: req.body.name })
      .then(channels => res.status(201).json(channels.serialize()))
      .catch(err => res.status(400).send(err.message));

  const listChannels = (req, res) =>
    models.channels
      .list()
      .then(channels => channels.map(channel => channel.serialize()))
      .then(channels => res.status(200).json(channels))
      .catch(err => res.status(400).send(err.message));

  const getChannelMessages = (req, res) =>
    models.channelMessages
      .list({ channelId: req.params.id })
      .then(messages => messages.map(msg => msg.serialize()))
      .then(messages => res.status(200).json(messages))
      .catch(err => res.status(400).send(err.message));

  const createChannelMessage = (req, res) =>
    models.channelMessages
      .create({
        channelId: req.params.id,
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
  router.post("", createChannel);
  router.get("", listChannels);
  router.get("/:id", getChannelMessages);
  router.post("/:id/messages", createChannelMessage);

  return router;
};
