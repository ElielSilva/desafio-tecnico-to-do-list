const Joi = require('joi');

function validateBodylogin (input) {
  const schema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().min(8).max(60).required(),
    });
  const { error } = schema.validate(input)
  if (!error) return '';
  return error?.details[0].message;
};

function validateBodyRegister (input) {
  const schema = Joi.object({
      name: Joi.string().min(3).max(20).required(),
      email: Joi.string().email().required(),
      password: Joi.string().min(6).required(),
    });
  const { error } = schema.validate(input)
  if (!error) return '';
  return error?.details[0].message;
};

function validateBodyUpdateTask (input) {
  const schema = Joi.object({
      title: Joi.string().min(5).max(35).required(),
      description: Joi.string().min(5).max(80).required(),
    });
  const { error } = schema.validate(input)
  if (!error) return '';
  return error?.details[0].message;
};


// const test1 = {title: "qwea", description: 'asdasdasdasd'}
// console.log(validateBodyUpdateTask(test1))

module.exports = { validateBodylogin, validateBodyRegister, validateBodyUpdateTask};