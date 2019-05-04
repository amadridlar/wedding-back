const router = require('express').Router();
const guestController = require('../controllers/rootController');

router.all('/guest', guestController);

module.exports = router;
