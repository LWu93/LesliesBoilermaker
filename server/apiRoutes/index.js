const router = require('express').Router();

router.use('/users', require('./users'))
router.use('kittens', require('./kittens'))

module.exports = router;
