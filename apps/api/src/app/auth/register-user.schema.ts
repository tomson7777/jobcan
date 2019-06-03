import * as Joi from 'joi';

export const RegisterUserSchema = Joi.object().keys({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).max(20).required(),
});
