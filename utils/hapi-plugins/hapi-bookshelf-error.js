'use strict';

var promise = require('bookshelf/lib/base/promise'),
    error = require('bookshelf/lib/errors')

module.exports = {
  name: 'hapi-bookshelf-error',
  version: '0.0.0',
  register: function (plugin, options, next) {

    plugin.ext('onPreResponse', function (request, next) {
      var Hapi = plugin.hapi,
      response = request.response;

      // Filter on bluebird promises only
      if (response.variety === 'plain' && response.source instanceof promise) {
        return response.source
          .catch(error.NotFoundError, function (err) {
            next(Hapi.error.notFound('Not found.'));
          });
      }

      next();
    });

    next();
  }
};
