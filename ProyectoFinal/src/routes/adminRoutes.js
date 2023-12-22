const express = require('express');
const router = express.Router();
const uploadFiles = require('../middlewares/uploadFiles');
const validateInput = require('../middlewares/validator');
const {validateSession, validateSessionAdministrator } = require('../middlewares/session');
const { body, validationResult, sanitizeBody  } = require('express-validator');

const controllers = require('../controllers/adminControllers');
const authControllers = require('../controllers/authControllers');

const loginValidations = [
    body('email')
        .isEmail()
        .withMessage('Ingrese una dirección de correo electrónico válida'),
    body('password')
        .isLength({min:6})
        .isAlphanumeric()
        .withMessage('La contraseña debe tener al menos 6 caracteres y contener letras y numeros.')
];

router.get('/admin', validateSessionAdministrator,controllers.adminView);
router.get('/create', validateSessionAdministrator,controllers.createView);
router.post('/create', validateSessionAdministrator,uploadFiles.array('images',2), controllers.createItem);
router.get('/edit/:id', validateSessionAdministrator,controllers.editView);
router.put('/edit/:id', validateSessionAdministrator,uploadFiles.array('images',2),controllers.editItem);
router.delete('/delete/:id', validateSessionAdministrator,controllers.deleteItem);
router.get('/login', controllers.loginView);
router.post('/login', loginValidations, validateInput,  authControllers.loginUser);
//router.post('/login', controllers.loginUser);
router.get('/logout',  authControllers.logoutUser);
router.get('/register', controllers.registerView);
router.post('/register', controllers.registerUser);

module.exports = router;

