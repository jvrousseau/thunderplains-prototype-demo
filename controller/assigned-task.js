var model = require('../model');
var bookshelf = require('../database').bookshelf();

exports.getAssignedTaskList = function (request, reply) {
    reply(model.assigned_task.forge().fetchAll({
        withRelated: ['employee', 'task']
    }));
};

exports.createAssignedTask = function (request, reply) {
    reply(model.assigned_task.forge(request.payload).save());
};

exports.getAssignedTask = function (request, reply) {
    reply(model.assigned_task.forge().where({
        id: request.params.id
    }).fetchAll({
        withRelated: ['employee', 'task']
    }));
};

exports.updateAssignedTask = function (request, reply) {
    reply(model.assigned_task.forge().where({
        id: request.params.id
    }).save(request.payload));
};

exports.deleteAssignedTask = function (request, reply) {
    reply(model.assigned_task.forge().where({
        id: request.params.id
    }).destroy());
};
