var controller = require('../controller');

exports.setup = function (server) {
    server.route({
        method: 'GET',
        path: '/company',
        handler: controller.company.getCompanyList
    });
    server.route({
        method: 'POST',
        path: '/company',
        handler: controller.company.createCompany
    });
    server.route({
        method: 'GET',
        path: '/company/{id}',
        handler: controller.company.getCompany
    });
    server.route({
        method: 'PUT',
        path: '/company/{id}',
        handler: controller.company.updateCompany
    });
    server.route({
        method: 'DELETE',
        path: '/company/{id}',
        handler: controller.company.deleteCompany
    });

    server.route({
        method: 'GET',
        path: '/company/{id}/employee',
        handler: controller.company.getCompanyEmployeeList
    })
}
