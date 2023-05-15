import joi from "joi";

export const gameSchema = joi.object({
    name: joi.string().min(1).required(),
    image: joi.string().min(1).required(),
    stockTotal: joi.number().integer().positive().options({ convert: false }).required(),
    pricePerDay: joi.number().integer().positive().options({ convert: false }).required()
})