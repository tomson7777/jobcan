import * as Joi from 'joi';

export const CreateOfferSchema = Joi.object()
  .options({ abortEarly: false })
  .keys({
    title: Joi.string().required(),
    userId: Joi.number().required(),
});
