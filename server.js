'use strict';

const config = require('./config/config.json')[process.env.NODE_ENV || 'development'];
const Hapi = require('@hapi/hapi');
const routes = require('./src/routes');
const Sequelize = require('sequelize');

const initDatabase = async () => {
  const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password, {
      port: config.port,
      host: config.host,
      dialect: config.dialect
  });

  // Testing database connection
  await sequelize.authenticate();
};

const initServer = async () => {
  const server = Hapi.server({
    port: config.serverPort,
    host: config.serverHost
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

const init = async () => {
  await initDatabase();
  await initServer();
}

init();
