const stripe = require('../services/stripe.service.js');

async function createCheckoutSession(req, res, next) {
  try {
    res.redirect(303, await stripe.createCheckoutSession(req.body));
  } catch (err) {
    console.error(`Error while creating stripe checkout session`, err.message);
    next(err);
  }
}

async function createPortalSession(req, res, next) {
  try {
    res.redirect(303, await stripe.createPortalSession(req.body));
  } catch (err) {
    console.error(`Error while creating stripe portal session`, err.message);
    next(err);
  }
}

function webhook(req, res, next) {
  try {
    res.send(stripe.webhook(req));
  } catch (err) {
    console.error(`Error while creating stripe portal session`, err.message);
    res.sendStatus(400);
    next(err);
  }
}

module.exports = {
  createCheckoutSession,
  createPortalSession,
  webhook,
};
