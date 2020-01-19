'use strict';

/* istanbul ignore next */
const config = require('../config/config.json')[process.env.NODE_ENV || 'development'];
const Hapi = require('@hapi/hapi');
const routes = require('./routes');
const Sequelize = require('sequelize');

const database = new Sequelize(
  config.database,
  config.username,
  config.password, {
    port: config.port,
    host: config.host,
    dialect: config.dialect
});

const server = Hapi.server({
  port: config.serverPort,
  host: config.serverHost
});

// Registering routes
routes.forEach(route => {
  server.route(route);
});

module.exports = { database, server };
