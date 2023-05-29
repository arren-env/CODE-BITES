import Joi from 'joi';

const productSchema = Joi.object({
    title: Joi.string().required(),
    story: Joi.string().required(),
    image: Joi.string(),
});

export default productSchema;