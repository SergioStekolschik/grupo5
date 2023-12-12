const express = require('express');
const router = express.Router();
const uploadFiles = require('../middlewares/uploadFiles');
const validateInput = require('../middlewares/validator');
const { body, validationResult, sanitizeBody  } = require('express-validator');

const controllers = require('../controllers/adminControllers');
const loginControllers = require('../controllers/loginControllers');

const loginValidations = [
    body('email')
        .isEmail()
        .withMessage('Ingrese una dirección de correo electrónico válida'),
    body('password')
        .isLength({min:6})
        .isAlphanumeric()
        .withMessage('La contraseña debe tener al menos 6 caracteres y contener letras y numeros.')
];

router.get('/admin', controllers.adminView);
router.get('/create', controllers.createView);
router.post('/create', uploadFiles.array('images',2), controllers.createItem);
//router.post('/create', controllers.createItem);
router.get('/edit/:id', controllers.editView);
router.put('/edit/:id', controllers.editItem);
router.delete('/delete/:id', controllers.deleteItem);
router.get('/login', controllers.loginView);
router.post('/login', loginValidations, validateInput, loginControllers.loginUser);
router.post('/login', controllers.loginUser);
router.get('/register', controllers.registerView);
router.post('/register', controllers.registerUser);

module.exports = router;

