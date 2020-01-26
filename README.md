# api-solo-project

_This was created during my time as a student at Code Chrysalis_

# Summer Olympics 2008 Winners API

## Table of Contents

1.  [Introduction](#introduction)
1.  [Environment](#environment)
    1.  [Installing Dependencies and Startup](#installing-dependencies-and-startup)
1.  [API Endpoints](#api-endpoints)

## Introduction

This is a simple CRUD api using postgres, knex and and REST. It contains the medal winners from the 2008 Summer Olympics.

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
    nodemon .
```

### API endpoints

#### See all winners

`api/winners`
This `GET` method shows all winners.

#### See all winners from a certain country

`api/winners/countryCode`
This `GET` method shows all winners.

#### Add new winner

`index.html`
From the homepage, this `POST` form will add a winner.
