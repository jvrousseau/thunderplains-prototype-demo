var hapi = require('hapi'),
    server = new hapi.Server('localhost', 2525),
    view = require('./view');

server.pack.register(require('./utils/hapi-plugins/hapi-promise'), function () {
    'use strict';
});
server.pack.register(require('./utils/hapi-plugins/hapi-bookshelf-error'), function () {
    'use strict';
});

view.setup(server);

server.pack.register({ plugin: require('lout') }, function() {
    server.start();
});
console.info("Server started on port 2525");
