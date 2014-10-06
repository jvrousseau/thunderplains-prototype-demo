var bookshelf = require('../database').bookshelf()
require('./assigned-task');
require('./employee');

module.exports = bookshelf.model('task', {
  tableName: 'task',
  assigned_task: function () {
      return this.hasMany('assigned-task');
  },
  employee: function () {
      return this.belongsToMany('employee').through('assigned-task');
  }
});
