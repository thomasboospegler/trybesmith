import Joi from 'joi';

export const productSchema = Joi.object({
  name: Joi.string().min(3).required(),
  amount: Joi.string().min(3).required(),
});

export const Schema = Joi.object({
});
