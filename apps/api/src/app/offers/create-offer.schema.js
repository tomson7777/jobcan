"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("joi");
exports.CreateOfferSchema = Joi.object()
    .options({ abortEarly: false })
    .keys({
    title: Joi.string().required(),
    userId: Joi.number().required(),
});
//# sourceMappingURL=create-offer.schema.js.map