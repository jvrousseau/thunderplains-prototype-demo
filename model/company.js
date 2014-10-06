var bookshelf = require('../database').bookshelf()
require('./employee');

module.exports = bookshelf.model('company', {
  tableName: 'company',
  employee: function () {
      return this.hasMany('employee');
  }
});
