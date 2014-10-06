var controller = require('../controller');

exports.setup = function (server) {
    server.route({
        method: 'GET',
        path: '/employee',
        handler: controller.employee.getEmployeeList
    });
    server.route({
        method: 'POST',
        path: '/employee',
        handler: controller.employee.createEmployee
    });
    server.route({
        method: 'GET',
        path: '/employee/{id}',
        handler: controller.employee.getEmployee
    });
    server.route({
        method: 'PUT',
        path: '/employee/{id}',
        handler: controller.employee.updateEmployee
    });
    server.route({
        method: 'DELETE',
        path: '/employee/{id}',
        handler: controller.employee.deleteEmployee
    });

    server.route({
        method: 'GET',
        path: '/employee/{id}/task',
        handler: controller.employee.getTaskByEmployee
    });
}
