# api-solo-project

_This was created during my time as a student at Code Chrysalis_

# Summer Olympics Winners API 1898-2008

## Table of Contents

1.  [Introduction](#introduction)
1.  [Environment](#environment)
    1.  [Installing Dependencies and Startup](#installing-dependencies-and-startup)
1.  [Objectives & Instructions](#objectives-and-instructions)
    1.  [Basic Requirements](#basic-requirements)
    1.  [Extra Credit](#extra-credit)
1.  [Resources](#resources)
1.  [Contributing](#contributing)

## Introduction

## Environment

### Postgres

You will need [postgres](https://postgresapp.com/) installed.

Create a database for this project by running:

```bash
    echo "CREATE DATABASE olympics;" | psql
```

### Installing Dependencies and Startup

To install dependencies:

```bash
    yarn
```

To set up the database, run migrations and seeds:

```bash
    yarn migrate
```

```bash
    yarn seed
```

To roll back migrations

```bash
    yarn rollback
```

To start the app:

```bash
    yarn start
```

To run tests:

```bash
    yarn test
```

# Databases Part II. Building Clack

## Table of Contents

1.  [Preface](#preface)
1.  [Introduction](#introduction)
1.  [Overview of Topics](#overview-of-topics)
    1.  [Knex](#knex)
    1.  [Migrations](#migrations)
    1.  [ORMs](#orms)
1.  [Environment](#environment)
    1.  [Installing Dependencies and Startup](#installing-dependencies-and-startup)
1.  [Objectives & Instructions](#objectives-and-instructions)
    1.  [Basic Requirements](#basic-requirements)
    1.  [Extra Credit](#extra-credit)
1.  [Resources](#resources)
1.  [Contributing](#contributing)

## Preface

This project is more complex than what you have seen before, it is supposed to mimic you graduating, getting your first job, being asked to handle a certain task. It is **normal** to feel overwhelmed.

Here are some pointers to go help you through this:

- In bigger Projects, you either have another team or developers work on separate tasks and parts of the project, so you do not need to and can not spend time trying to understand everything
- You will have a certain task, prioritize finding out _where_ in the code base you have to work on
- VSCode is your best friend, use `CMD + P` to quickly navigate through files, searching for terms like "migration", to help you find what you need
- You will need to get comfortable not knowing everything, keep in mind: Conjure, CONJURE, CONJURE

## Introduction

In this second half of we'll look at integrating a database around the business logic of an app, in the context of the ever-ubiquitous chat app. We'll look at migrations, writing SQL in node using the de-facto standard [knex](library), and at writing a simple ORM so we can get on with writing our business logic without _always_ thinking about databases. We're going a build the backend for a `Clack - The Crappy Slack`, a simple chat app that allows a user to:

- Send and receive messages to and from each other
- Create channels
- Join channels
- send and receive messages from channels they've joined

Note that in this sprint, the routes and front-end are mostly done for you. You'll spend most of your time in `./services/db/*`.

## Overview of Topics

### Knex

In the first half of this sprint, you interacted with the database by writing raw SQL. This, as you can imagine, can be a pain, and it's much preferred to interact with your database in Node by using a library that lets you write SQL in a more javascripty way. [Knex](http://knexjs.org/) is the de-facto standard library for this, and you'll be using it a lot in this sprint. I suggest you keep the documentation open in one tab, because you'll be reading it a lot. In a nutshell, knex is a Query Builder, i.e., all it does is let you write queries in normal Javascript that it then converts to SQL for you. Don't be afraid. Embrace it.

### Migrations

We covered this in the extra-credit section of the first half of this sprint, but if you didn't get there, don't worry—-we'll be going over it again here.

Whenever we change the schema of a table, we do so within a migration. A migration is a set of queries that change the schema in some way, and alter the data to fit within the new schema. Migrations should _always_ happen within a transaction. If you're not familiar with transactions, you can read everything you need to know about them for this sprint in the extra-credit section of the last sprint.

If you find yourself struggling, do as much of [This short tutorial](https://www.tutorialspoint.com/postgresql/postgresql_transactions.htm) on transactions as you feel you need to.

### ORMs

An ORM is an Object Relational Mapping, i.e., something that converts database results into Objects. The distinction here is that objects can have methods, and methods can be useful for all kinds of things. We'll be creating a classes for users, messages, and channels in this sprint, and hopefully you'll appreciate the sense of standardisation and predictability they'll give you.

Note that there any several ORM libraries built for node. We've deliberately not used them because in general:

- They're not yet very mature... they work well for simple use cases but most projects quickly outgrow them
- We want you to learn about how things work in real life.

For the curious among you, check out [Bookshelf](http://bookshelfjs.org/), possibly the most popular ORM for node.

## Environment

### Postgres

You will need postgres installed. If you haven't installed it already, download and install the [PostgresApp](https://postgresapp.com/) and verify its working by running the command `psql` in your terminal.

Create a database for this project by running:

```bash
    echo "CREATE DATABASE clack;" | psql
```

### Installing Dependencies and Startup

Example:

To install dependencies:

```bash
    yarn
```

To run migrations and set up the database:

```bash
    yarn migrate
```

To roll back migrations

```bash
    yarn rollback
```

To run tests:

```bash
    yarn test
```

To run the app:

```bash
    yarn start
```

## Objectives and Instructions

### Basic Requirements

- We've provided a very, very simple client app to go along with the backend you'll be completing.
  - To see it, start the app using `yarn start`
  - Navigate to `localhost:3000` in your browser
  - The functionality will be pretty limited since the backend doesn't do anything yet, all you can do is create/sign in as a user
  - You will have to implement getting channels, getting users, and sending and receiving messages.
- For testing out APIs like the one you'll be building today, its useful to have an API testing tool like [Postman](https://www.getpostman.com/)

  - We recommend you download and get familiar with it, but its totally optional.
    - It should take you less than 10 minutes to become completely familiar with it.

- [ ] Take 20-30 minutes to understand the layout of the repo. Pay particular attention to how
  - configs are passed into services in `index.js`, and what information is contained in `config.js`
  - `models/index.js` initializes a connection to the database using knex, which is a then passed to the submodules
  - `models/users/index.js` is laid out, and that the `User` class and `knex` are passed to all the methods contained in it
  - `models/users/create.js` uses its dependencies to return the same a standardised user model, with a `serialize` method
  - `controllers/user/index.js` uses `models` methods to perform basic crud operations
- [ ] Make the specs pass

  - [ ] Make `models.users.list` work as expected

  - [ ] Add a migration to create a `channels` table.
    - Run `knex migrate:make add_channels_table --knexfile models/knexfile.js` to create a new migration
    - It should include the columns `id` and `name`
    - Use the existing migration in `models/migrations/` for reference.
      - You can run you migrations using `yarn run migrate`, and roll them back using `yarn run rollback`
  - [ ] Complete the methods to `list` and `create` channels.

  - [ ] Add a migration to create a `channel_messages` table.
    - Run `knex migrate:make add_channel_messages_table --knexfile models/knexfile.js` to create a new migration
    - It should include the columns `id`, `channel_id`, `from_id`, `message` and `sent_at`
  - [ ] Complete the methods to `list` and `create` channel messages.

    - Note that the create method should return all the ChannelMessages in that channel after creating the new message

  - [ ] Add a migration to create a `user_messages` table.
    - Run `knex migrate:make add_user_messages_table --knexfile models/knexfile.js` to create a new migration
    - It should include the columns `id`, `from_id`, `to_id`, `message` and `sent_at`
  - [ ] Add methods to `list` and `create` messages for a given pair of users

### Extra Credit

- [ ] Create a join table between users and channels showing
  - `user_id`, `channel_id`, `read_up_to` (timestamp)
- [ ] Write tests for, and implement the following behaviour:

  - Whenever a user gets the messages in a channel
    - mark all messages sent _after_ the read_up_to for that channel and user with an additional boolean property read: false, and the remainder with read: true
    - update the `read_up_to` for that user and channel to be the current time

- [ ] Rewrite any of the database modules we have using [Bookshelf](http://bookshelfjs.org/). You should not have to change the tests.

- [ ] Enable the client app to 'sign in'.
  - [ ] Watch [this video](https://www.youtube.com/watch?v=8ZtInClXe1Q) about the dilemas of storing passwords, and how to store them semi-securely
  - [ ] Add a migration to add a 'password' field in the users table
  - [ ] Write tests for, and implement the following behaviour
    - Alter the create method to require a password in addition to the username
    - Hash the passwords when storing them using [bcrypt](https://www.npmjs.com/package/bcrypt)
    - Add a method to the users module named `authenticate` that accepts a username and password, and checks the username and password against those in the database.

## Resources

- [Knex Documentation](http://knexjs.org/)
- [A brief tutorial on transactions](https://www.tutorialspoint.com/postgresql/postgresql_transactions.htm)
- [Express v4.x Documentation](https://expressjs.com/en/api.html)
- [Chai Assertion Library](http://chaijs.com/api/)

## Contributing

See a problem? Can something be done better? [Contribute to our curriculum](mailto:hello@codechrysalis.io)!
