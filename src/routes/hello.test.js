'use strict';

const server = require('../server').server;

describe('testing welcoming route', () => {

  it('should welcome', async function () {
    const r = await server.inject({ method: 'GET', url: '/' });
    expect(r.statusCode).toBe(200);
    expect(typeof r.payload === 'string').toBeTruthy();
  });
  
});
