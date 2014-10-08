var path = require('path'),
    database_filename = path.normalize(__dirname + '/prototype.sqlite3');
    knex = require('knex')({
  client: 'sqlite3',
  debug: false,
  connection: {
    filename: database_filename
  }
});

/*var knex = require('knex')({
    client: 'mysql',
    debug: false,
    connection: {
      database: 'prototype',
      user:     'user',
      password: 'temp50',
      host: 'localhost'
  }
});*/

var bookshelf = require('bookshelf')(knex);
bookshelf.plugin('registry');

exports.bookshelf = function () {
    return bookshelf;
}
