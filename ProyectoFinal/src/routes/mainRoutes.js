const express = require('express');
const router = express.Router();

const mainControllers = require('../controllers/mainControllers');

//router.get('/home', homeView);
router.get('/contact', mainControllers.contactView);
//router.get('/about', aboutView);
//router.get('/faqs', faqsView);

module.exports = router;