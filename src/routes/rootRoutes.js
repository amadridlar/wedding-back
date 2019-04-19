const router = require('express').Router();
const rootController = require('../lib/rootController');

router.route('')
  .get(rootController.entryPoint);

module.exports = router;
