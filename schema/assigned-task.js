var Joi = require('joi');

module.exports = Joi.object().keys({
  id: Joi.number().integer().min(1).forbidden(), //auto-incrementing primary key
  employee_id: Joi.number().integer().min(1),
  task_id: Joi.number().integer().min(1)
});
