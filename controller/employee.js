var model = require('../model');
var bookshelf = require('../database').bookshelf();

exports.getEmployeeList = function (request, reply) {
    reply(model.employee.forge().fetchAll({
        withRelated: ['company']
    }));
};

exports.createEmployee = function (request, reply) {
    reply(model.employee.forge(request.payload).save());
};

exports.getEmployee = function (request, reply) {
    reply(model.employee.forge().where({
        id: request.params.id
    }).fetchAll({
        withRelated: ['company']
    }));
};

exports.updateEmployee = function (request, reply) {
    reply(model.employee.forge().where({
        id: request.params.id
    }).save(request.payload));
};

exports.deleteEmployee = function (request, reply) {
    reply(model.employee.forge().where({
        id: request.params.id
    }).destroy());
};

exports.getTaskByEmployee = function (request, reply) {
    reply(model.employee.forge().where({
        id: request.params.id
    }).fetchAll({
        withRelated: ['company', 'task']
    }));
}
