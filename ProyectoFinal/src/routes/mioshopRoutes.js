const express = require('express');
const router = express.Router();
const shopControllers = require('../controllers/shopController');

router.get('/', shopControllers.shop);
router.get('/item/:id', shopControllers.itemByID);
router.post('/item/:id/add', shopControllers.itemAdd);
router.get('/cart', (req, res) => shopControllers.cart);
router.post('/cart', (req, res) => shopControllers.cartCheckOut);

module.exports = router;

