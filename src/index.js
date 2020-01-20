'use strict';

const database = require('./server').database;
const HapiSwagger = require('hapi-swagger');
const Inert = require('@hapi/inert');
const Pack = require('../package');
const server = require('./server').server;
const Vision = require('@hapi/vision');

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

  // Registering documentation system if we are in a development environment
  if (process.env.NODE_ENV === undefined || process.env.NODE_ENV === 'development') {
    await server.register([
      Inert,
      Vision,
      {
        plugin: HapiSwagger,
        options: {
          info: {
            title: 'Node boilerplate API documentation',
            version: Pack.version,
          },
        }
      }
    ]);
  }

  // Starting server
  await server.start();
  console.log('API running on %s', server.info.uri);
};

init();
