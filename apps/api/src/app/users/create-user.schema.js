"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("joi");
const role_enum_1 = require("../shared/role.enum");
exports.CreateUserSchema = Joi.object().keys({
    firstName: Joi.string().required(),
    email: Joi.string().email().required(),
    role: Joi.string().valid(role_enum_1.roleKeys).required(),
    password: Joi.string().min(6).max(20).required(),
});
//# sourceMappingURL=create-user.schema.js.map