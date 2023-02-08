const express = require('express');

const router = express.Router();
const stripe = require('../controllers/stripe.controller.js');

/* POST stripe */
router.post('/create-checkout-session', stripe.createCheckoutSession);
router.post('/create-portal-session', stripe.createPortalSession);
router.post(
  '/webhook',
  express.raw({ type: 'application/json' }),
  stripe.webhook
);

module.exports = router;
