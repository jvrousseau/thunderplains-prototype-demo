var model = require('../model');
var bookshelf = require('../database').bookshelf();

exports.getTaskList = function (request, reply) {
    reply(model.task.forge().fetchAll());
};

exports.createTask = function (request, reply) {
    reply(model.task.forge(request.payload).save());
};

exports.getTask = function (request, reply) {
    reply(model.task.forge().where({
        id: request.params.id
    }).fetchAll());
};

exports.updateTask = function (request, reply) {
    reply(model.task.forge().where({
        id: request.params.id
    }).save(request.payload));
};

exports.deleteTask = function (request, reply) {
    reply(model.task.forge().where({
        id: request.params.id
    }).destroy());
};

exports.getEmployeeAssignedToTask = function (request, reply) {
    reply(model.task.forge().where({
        id: request.params.id
    }).fetchAll({
        withRelated: ['employee']
    }));
}
