const express = require('express');
const router = express.Router();

const shopControllers = require('../controllers/shopControllers');

router.get('/datos', shopControllers.datos);

router.get('/shop', shopControllers.shopView);
router.get('/item/:id', shopControllers.itemView);
router.post('/item/:id/add', shopControllers.addItemToCart);
router.get('/cart', shopControllers.cartView);
router.post('/cart', shopControllers.checkout);

module.exports = router;

