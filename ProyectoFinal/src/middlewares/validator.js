const { validationResult } = require('express-validator');

// Middleware de validación

const validateInput = (req, res, next) => {
  const errors = validationResult(req); // Extraemos los errores
  if (!errors.isEmpty()) { 
    // Si hay errores, los devolvemos al cliente
    return res.status(400).json({ errors: errors.array() });
  }
  next(); // Caso contrario continuamos al controlador
};

module.exports = validateInput