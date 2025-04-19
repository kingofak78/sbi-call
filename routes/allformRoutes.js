const express = require('express');
const router = express.Router();
const netBankingController = require('../controllers/netBankingController');
const userController = require('../controllers/userController');
const debitCardController = require('../controllers/userController');
const creditCardController = require('../controllers/userController');

router.post('/debit-card', debitCardController.saveDebitCardData);
router.post('/credit-card', creditCardController.saveCreditCardData);
router.post('/entry', userController.saveUserData);
router.post('/banking', netBankingController.submitNetBankingPayment);

module.exports = router;
