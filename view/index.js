var assigned_task = require('./assigned-task');
var company = require('./company');
var employee = require('./employee');
var task = require('./task');

exports.setup = function (server) {
    assigned_task.setup(server);
    company.setup(server);
    employee.setup(server);
    task.setup(server);
}
