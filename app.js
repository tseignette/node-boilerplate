'use strict';

const config = require('./config/config.json');
const Hapi = require('@hapi/hapi');
const routes = require('./src/routes');

const init = async () => {
  const server = Hapi.server({
    port: config.port,
    host: config.host
  });

  // Registering routes
  routes.forEach(route => {
    server.route(route);
  });

  // Starting server
  await server.start();
  console.log('API running on %s', server.info.uri);
};

process.on(
  'unhandledRejection',
  (err) => {
    console.log(err);
    process.exit(1);
  }
);

init();
