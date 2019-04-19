const router = require('express').Router();
const guestController = require('../lib/guestController');

router.route('/new')
  .post(guestController.newGuest);

module.exports = router;
