/**
 ********************************DEPENDENCIES********************************
 ****************************************************************************
 */

/*
Instead of hard-coding configs for your app whenever you need them, I think
its polite to have them all in one place. Think of config.js as the global
control panel for your app.
*/
const config = require("./config");

/*
Database and other external 'services'. In general, when interfacing
with an external API it can be helpful to separate your code into
isolated modules that have a single responsibility.

In this case, I've made a database 'service', which will contain bundles
of handy functions for interacting with our database. There's also a
'logger' service, that just formats the logs in a way that makes them
easier to debug.

Notice that any configs required by the services are explicitly injected
here. In principle, you could cut out any of these services and paste it
into another project, and assuming your business logic is pretty similar,
all you would have to change is the injected config.
*/
const services = require("./services")(config);

// initialize a connection to the database, and pass this
// to the various submodules within
const knex = require("knex")(config.db);
const models = require("./models")(knex);

/*
Routes for the server. Note that these are explicitly injected the
initialized 'services', including the database methods and logger.
We use this kind of 'dependency injection' to prevent arbitrarily
'require'-ing code everywhere. You'll appreciate this when writing tests
in this repo. Another benefit, if you use dependency injection its much
harder to end up with circular dependencies =)
*/
const apiRouter = require("./controllers")(models);

const morgan = require("morgan"); // a popular library for logging your requests

const bodyParser = require("body-parser"); // a middleware plugin to enable express to parse JSON

// and of course, an express server =)
const express = require("express");

const app = express();

/**
 ********************************SERVER SETUP********************************
 ****************************************************************************
 */

/*
This consists mostly of adding middleware and starting the server. Middleware,
in the context of express, is a collective term to describe functions that run
to handle a request.

What we're doing below is setting up the middleware 'pipeline'. All requests that
hit this server will run through the following steps, in the numbered order.

If this is at all confusing to you, take 15 mins and read:
https://www.safaribooksonline.com/blog/2014/03/10/express-js-middleware-demystified/
*/

// 1. log every request when it comes in
app.use(morgan("dev"));

// 2. Set the headers for incoming requests
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET,PUT,POST,DELETE,OPTIONS,PATCH"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, authorization"
  );
  next();
});

// 3. Parse request bodies as json
app.use(bodyParser.json({ type: "application/json", limit: "50mb" }));

// 4. If the requests begin with '/api', hand them off to the API router
app.use("/api", apiRouter);
app.use(express.static(`${__dirname}/public`)); // otherwise load the client app

// 5. Catch unhandled errors thrown by any of the previous middleware steps
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  if (err.stack) {
    if (err.stack.match("node_modules/body-parser"))
      return res.status(400).send("Invalid JSON");
  }

  services.logger.log(err);
  return res.status(500).send("Internal Error.");
});

/**
 ********************************START SERVER********************************
 ****************************************************************************
 */

app.listen(config.express.port, () => {
  services.logger.log(`Server up and listening on port ${config.express.port}`);
});
