const Joi = require('joi');

module.exports = {
    getTrainingsById: {
        params: {
            id: Joi.string().hex().length(24)
        }
    }
}