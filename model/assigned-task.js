var bookshelf = require('../database').bookshelf()
require('./employee');
require('./task');

module.exports = bookshelf.model('assigned-task', {
  tableName: 'assigned_task',
  employee: function () {
    return this.belongsTo('employee');
  },
  task: function () {
    return this.belongsTo('task');
  }
});
