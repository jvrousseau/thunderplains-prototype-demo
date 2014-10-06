var controller = require('../controller');

exports.setup = function (server) {
    server.route({
        method: 'GET',
        path: '/task',
        handler: controller.task.getTaskList
    });
    server.route({
        method: 'POST',
        path: '/task',
        handler: controller.task.createTask
    });
    server.route({
        method: 'GET',
        path: '/task/{id}',
        handler: controller.task.getTask
    });
    server.route({
        method: 'PUT',
        path: '/task/{id}',
        handler: controller.task.updateTask
    });
    server.route({
        method: 'DELETE',
        path: '/task/{id}',
        handler: controller.task.deleteTask
    });
    server.route({
        method: 'GET',
        path: '/task/{id}/employee',
        handler: controller.task.getEmployeeAssignedToTask
    });
}
