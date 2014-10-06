var bookshelf = require('../database').bookshelf()
require('./company');
require('./task');
require('./assigned-task');

module.exports = bookshelf.model('employee', {
    tableName: 'employee',
    company: function () {
        return this.belongsTo('company');
    },
    task: function () {
        return this.belongsToMany('task').through('assigned-task');
    },
    assigned_task: function () {
        return this.hasMany('assigned-task');
    }

});
