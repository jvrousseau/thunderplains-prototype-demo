var model = require('../model');
var bookshelf = require('../database').bookshelf();

exports.getCompanyList = function (request, reply) {
    reply(model.company.forge().fetchAll());
};

exports.createCompany = function (request, reply) {
    reply(model.company.forge(request.payload).save());
};

exports.getCompany = function (request, reply) {
    reply(model.company.forge().where({
        id: request.params.id
    }).fetchAll());
};

exports.updateCompany = function (request, reply) {
    reply(model.company.forge().where({
        id: request.params.id
    }).save(request.payload));
};

exports.deleteCompany = function (request, reply) {
    reply(model.company.forge().where({
        id: request.params.id
    }).destroy());
};

exports.getCompanyEmployeeList = function (request, reply) {
    request.params.id
    reply(model.company.forge().where({
        id: request.params.id
    }).fetchAll({
        withRelated: ['employee']
    }));
};
