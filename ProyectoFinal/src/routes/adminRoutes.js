const express = require('express');
const router = express.Router();
const adminControllers = require('../controllers/adminController')

router.get('/', adminControllers.admin);
router.get('/create', adminControllers.getCreate);
router.post('/create', adminControllers.postCreate);
router.get('/edit/:id', adminControllers.getByID);
router.put('/edit/:id', adminControllers.putByID);
router.delete('/edit/:id', adminControllers.deleteByID);
router.get('/login', adminControllers.loginGet);
router.post('/login', adminControllers.loginPost);
router.get('/register', adminControllers.registerGet);
router.post('/register', adminControllers.registerPost);

module.exports = router;

