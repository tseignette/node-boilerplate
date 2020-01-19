'use strict';

const server = require('./server').server;

describe('testing server', () => {

  it('should return 404', async () => {
    const r = await server.inject({ method: 'GET', url: '/someunexistingroute' });
    expect(r.statusCode).toBe(404);
  });

});
