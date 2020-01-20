'use strict';

module.exports = {

  method: 'GET',
  path: '/',
  options: {
    description: 'User welcoming',
    notes: 'Returns a welcoming message to the user',
    tags: [ 'api' ],
    handler: (request, h) => { return 'Hello World!' },
  },

};
