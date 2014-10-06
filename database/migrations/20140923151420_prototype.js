'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('company', function (table) {
        table.increments().unsigned();
        table.string('name');
    }).createTable('employee', function (table) {
        table.increments().unsigned();
        table.string('name');
        table.integer('company_id').unsigned().references('company.id').notNullable();
    }).createTable('task', function (table) {
        table.increments().unsigned();
        table.string('name');
    }).createTable('assigned_task', function (table) {
            table.increments().unsigned();
            table.integer('employee_id').unsigned().references('employee.id').notNullable();
            table.integer('task_id').unsigned().references('task.id').notNullable();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('company')
        .dropTable('employee')
        .dropTable('task')
        .dropTable('assigned_task');
};
