const Joi = require('joi');
const InputValidationError = require('../../libs/errors/input-validation-error');
const { getTrainingsById } = require('./schemas');

function validateGetTrainingArgs (req, res, next) {

    const arguments = {params: req.params};
    const { error } = Joi.validate(arguments,getTrainingsById);

    if (error) {
        return next(new InputValidationError(error.message));
    }

    return next();
}

module.exports = {
    validateGetTrainingArgs
};
