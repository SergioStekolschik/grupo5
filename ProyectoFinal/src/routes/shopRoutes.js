const express = require('express');
const router = express.Router();

const shopControllers = require('../controllers/shopControllers');

router.get('/shop', shopControllers.shopView);
router.get('/item/:id', shopControllers.itemView);
router.post('/item/:id/add', shopControllers.addItemToCart);
router.get('/cart', shopControllers.cartView);
router.post('/cart', shopControllers.checkout);

/*

const {
  shopView,
  itemView,
  addItemToCart,
  cartView,
  checkout,
} = require('../controllers/shopControllers');
*/

module.exports = router;

