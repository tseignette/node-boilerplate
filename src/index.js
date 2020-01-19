'use strict';

const database = require('./server').database;
const server = require('./server').server;

process.on(
  'unhandledRejection',
  (err) => {
    console.log(err);
    process.exit(1);
  }
);

const init = async () => {
  // Testing database connection
  await database.authenticate();

  // Starting server
  await server.start();
  console.log('API running on %s', server.info.uri);
};

init();
