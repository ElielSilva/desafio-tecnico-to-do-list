// import * as Joi from 'joi';
import Joi from "joi";

interface BodyLogin {
  [x: string]: any;
  email: string;
  password: string;
}

interface BodyRegister {
  [x: string]: any;
  name: string;
  email: string;
  password: string;
}

function validateBodylogin (input: BodyLogin): boolean {
  const schema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().min(6).required(),
    });
  const { error } = schema.validate(input)
  if (!error) return false;
  return true;
};

function validateBodyRegister (input: BodyRegister): boolean {
  const schema = Joi.object({
      name: Joi.string().min(3).max(20).required(),
      email: Joi.string().email().required(),
      password: Joi.string().min(6).required(),
    });
  const { error } = schema.validate(input)
  if (!error) return false;
  return true;
};

export { validateBodylogin, validateBodyRegister};