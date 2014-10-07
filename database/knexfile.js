// Update with your config settings.

module.exports = {

    development: {
        client: 'sqlite3',
        connection: {
            filename: './prototype.sqlite3'
        }
    },
    staging: {
        client: 'mysql',
        connection: {
          database: 'prototype',
          user:     'user',
          password: 'temp50',
          host: 'localhost'
        }
    }
};
