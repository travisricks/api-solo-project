const express = require("express");

const router = express.Router();

const userRouter = require("./user");
const channelRouter = require("./channel");

module.exports = models => {
  router.use("/users", userRouter(models));
  router.use("/channels", channelRouter(models));

  return router;
};
