import * as Joi from 'joi';
import { roleKeys } from '../shared/role.enum';

export const CreateUserSchema = Joi.object().keys({
  firstName: Joi.string().required(),
  email: Joi.string().email().required(),
  role: Joi.string().valid(roleKeys).required(),
  password: Joi.string().min(6).max(20).required(),
});
