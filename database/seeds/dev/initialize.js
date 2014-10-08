'use strict';

exports.seed = function(knex, Promise) {
  var company_arr,
      employee_arr,
      task_arr;

return knex('company').delete().then(function() {
  return knex('employee').delete();
}).then(function() {
  return knex('task').delete();
}).then(function() {
  return knex('assigned_task').delete();
}).then(function() {
  return knex('company').insert([
      {'name': 'Weather Decision Technologies'},
      {'name': 'Olaf, Inc.'},
      {'name': 'Rapunzel, LLC'}
  ]);
}).then(function () {
  return knex.select('id', 'name').from('company');
}).then(function (companies) {
  company_arr = companies;
  return knex('employee').insert([
      {'name': 'Anna', 'company_id': company_arr[Math.floor(Math.random()*company_arr.length)].id},
      {'name': 'Jordan', 'company_id': company_arr[Math.floor(Math.random()*company_arr.length)].id},
      {'name': 'Elsa', 'company_id': company_arr[Math.floor(Math.random()*company_arr.length)].id},
      {'name': 'Devin', 'company_id': company_arr[Math.floor(Math.random()*company_arr.length)].id},
      {'name': 'Sven', 'company_id': company_arr[Math.floor(Math.random()*company_arr.length)].id},
      {'name': 'Kristoff', 'company_id': company_arr[Math.floor(Math.random()*company_arr.length)].id},
      {'name': 'Olaf', 'company_id': company_arr[Math.floor(Math.random()*company_arr.length)].id},
      {'name': 'Ying', 'company_id': company_arr[Math.floor(Math.random()*company_arr.length)].id},
      {'name': 'Yanhong', 'company_id': company_arr[Math.floor(Math.random()*company_arr.length)].id},
      {'name': 'Rapunzel', 'company_id': company_arr[Math.floor(Math.random()*company_arr.length)].id},
      {'name': 'Flynn Rider', 'company_id': company_arr[Math.floor(Math.random()*company_arr.length)].id}
  ]);
}).then(function () {
  return knex('task').insert([
      {'name': 'write code'},
      {'name': 'eat dinner'},
      {'name': 'give warm hugs'},
      {'name': 'don\'t freeze everything'},
      {'name': 'make a website'},
      {'name': 'grow hair out'},
      {'name': 'find cool node things'},
      {'name': 'stop writing python'},
      {'name': 'make a new prototype'},
      {'name': 'create a conference talk'},
      {'name': 'don\'t melt'},
      {'name': 'eat ice cream'},
      {'name': 'find new mysql stuff'},
      {'name': 'sleep'},
      {'name': 'sing let it go'},
      {'name': 'stop writing php'},
      {'name': 'do more node'},
      {'name': 'build an api'},
      {'name': 'stop breaking jenkins'},
      {'name': 'be happy'},
  ]);
}).then(function (){
  return knex.select('id', 'name').from('employee');
}).then(function (employees){
  employee_arr = employees;
  return knex.select('id', 'name').from('task');
}).then(function (tasks){
  task_arr = tasks;
  return knex('assigned_task').insert([
      {'employee_id': employee_arr[Math.floor(Math.random()*employee_arr.length)].id, 'task_id':task_arr[Math.floor(Math.random()*task_arr.length)].id},
      {'employee_id': employee_arr[Math.floor(Math.random()*employee_arr.length)].id, 'task_id':task_arr[Math.floor(Math.random()*task_arr.length)].id},
      {'employee_id': employee_arr[Math.floor(Math.random()*employee_arr.length)].id, 'task_id':task_arr[Math.floor(Math.random()*task_arr.length)].id},
      {'employee_id': employee_arr[Math.floor(Math.random()*employee_arr.length)].id, 'task_id':task_arr[Math.floor(Math.random()*task_arr.length)].id},
      {'employee_id': employee_arr[Math.floor(Math.random()*employee_arr.length)].id, 'task_id':task_arr[Math.floor(Math.random()*task_arr.length)].id},
      {'employee_id': employee_arr[Math.floor(Math.random()*employee_arr.length)].id, 'task_id':task_arr[Math.floor(Math.random()*task_arr.length)].id},
      {'employee_id': employee_arr[Math.floor(Math.random()*employee_arr.length)].id, 'task_id':task_arr[Math.floor(Math.random()*task_arr.length)].id},
      {'employee_id': employee_arr[Math.floor(Math.random()*employee_arr.length)].id, 'task_id':task_arr[Math.floor(Math.random()*task_arr.length)].id},
      {'employee_id': employee_arr[Math.floor(Math.random()*employee_arr.length)].id, 'task_id':task_arr[Math.floor(Math.random()*task_arr.length)].id},
      {'employee_id': employee_arr[Math.floor(Math.random()*employee_arr.length)].id, 'task_id':task_arr[Math.floor(Math.random()*task_arr.length)].id},
      {'employee_id': employee_arr[Math.floor(Math.random()*employee_arr.length)].id, 'task_id':task_arr[Math.floor(Math.random()*task_arr.length)].id},
      {'employee_id': employee_arr[Math.floor(Math.random()*employee_arr.length)].id, 'task_id':task_arr[Math.floor(Math.random()*task_arr.length)].id},
      {'employee_id': employee_arr[Math.floor(Math.random()*employee_arr.length)].id, 'task_id':task_arr[Math.floor(Math.random()*task_arr.length)].id},
      {'employee_id': employee_arr[Math.floor(Math.random()*employee_arr.length)].id, 'task_id':task_arr[Math.floor(Math.random()*task_arr.length)].id},
      {'employee_id': employee_arr[Math.floor(Math.random()*employee_arr.length)].id, 'task_id':task_arr[Math.floor(Math.random()*task_arr.length)].id},
      {'employee_id': employee_arr[Math.floor(Math.random()*employee_arr.length)].id, 'task_id':task_arr[Math.floor(Math.random()*task_arr.length)].id},
      {'employee_id': employee_arr[Math.floor(Math.random()*employee_arr.length)].id, 'task_id':task_arr[Math.floor(Math.random()*task_arr.length)].id},
      {'employee_id': employee_arr[Math.floor(Math.random()*employee_arr.length)].id, 'task_id':task_arr[Math.floor(Math.random()*task_arr.length)].id},
      {'employee_id': employee_arr[Math.floor(Math.random()*employee_arr.length)].id, 'task_id':task_arr[Math.floor(Math.random()*task_arr.length)].id},
      {'employee_id': employee_arr[Math.floor(Math.random()*employee_arr.length)].id, 'task_id':task_arr[Math.floor(Math.random()*task_arr.length)].id},
      {'employee_id': employee_arr[Math.floor(Math.random()*employee_arr.length)].id, 'task_id':task_arr[Math.floor(Math.random()*task_arr.length)].id},
      {'employee_id': employee_arr[Math.floor(Math.random()*employee_arr.length)].id, 'task_id':task_arr[Math.floor(Math.random()*task_arr.length)].id},
      {'employee_id': employee_arr[Math.floor(Math.random()*employee_arr.length)].id, 'task_id':task_arr[Math.floor(Math.random()*task_arr.length)].id},
      {'employee_id': employee_arr[Math.floor(Math.random()*employee_arr.length)].id, 'task_id':task_arr[Math.floor(Math.random()*task_arr.length)].id},
      {'employee_id': employee_arr[Math.floor(Math.random()*employee_arr.length)].id, 'task_id':task_arr[Math.floor(Math.random()*task_arr.length)].id},
      {'employee_id': employee_arr[Math.floor(Math.random()*employee_arr.length)].id, 'task_id':task_arr[Math.floor(Math.random()*task_arr.length)].id},
      {'employee_id': employee_arr[Math.floor(Math.random()*employee_arr.length)].id, 'task_id':task_arr[Math.floor(Math.random()*task_arr.length)].id},
      {'employee_id': employee_arr[Math.floor(Math.random()*employee_arr.length)].id, 'task_id':task_arr[Math.floor(Math.random()*task_arr.length)].id},
      {'employee_id': employee_arr[Math.floor(Math.random()*employee_arr.length)].id, 'task_id':task_arr[Math.floor(Math.random()*task_arr.length)].id},
      {'employee_id': employee_arr[Math.floor(Math.random()*employee_arr.length)].id, 'task_id':task_arr[Math.floor(Math.random()*task_arr.length)].id}
  ]);
});
};
