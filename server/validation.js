const Joi = require("@hapi/joi");

const registerValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(1).required(),
    email: Joi.string().min(8).required().email(),
    password: Joi.string().min(8),
  });

  return schema.validate(data); // TO return only the error message
};
const loginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().min(8).required().email(),
    password: Joi.string().min(8),
  });

  return schema.validate(data);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;

/* We could have like this direclty in authentication file for checking complete validation
const validation = schema.validate(req.body);
res.send(validation);

*/
