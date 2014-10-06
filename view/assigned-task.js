var controller = require('../controller');
var schema = require('../schema');

exports.setup = function (server) {
    server.route({
        method: 'GET',
        path: '/assigned-task',
        handler: controller.assigned_task.getAssignedTaskList,
        config: {
            description: 'GET AssignedTask',
            notes: 'Get List of All Assigned Tasks',
            tags: ['assigned-task']
        }
    });
    server.route({
        method: 'POST',
        path: '/assigned-task',
        handler: controller.assigned_task.createAssignedTask,
        config: {
            description: 'CREATE AssignedTask',
            notes: 'Create an Assigned Task',
            tags: ['assigned-task'],
            validate: {
                payload: schema.assigned_task
            }
        }
    });
    server.route({
        method: 'GET',
        path: '/assigned-task/{id}',
        handler: controller.assigned_task.getAssignedTask,
        config: {
            description: 'GET AssignedTask by ID',
            notes: 'Get an Assigned Task given an id parameter',
            tags: ['assigned-task']
        }
    });
    server.route({
        method: 'PUT',
        path: '/assigned-task/{id}',
        handler: controller.assigned_task.updateAssignedTask,
        config: {
            description: 'UPDATE AssignedTask',
            notes: 'Update an Assigned Task given an id parameter',
            tags: ['assigned-task'],
            validate: {
                payload: schema.assigned_task
            }
        }
    });
    server.route({
        method: 'DELETE',
        path: '/assigned-task/{id}',
        handler: controller.assigned_task.deleteAssignedTask,
        config: {
            description: 'CREAT AssignedTask',
            notes: 'Delete an Assigned Task given an id parameter',
            tags: ['assigned-task']
        }
    });
}
