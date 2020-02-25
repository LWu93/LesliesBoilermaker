const router = require('express').Router();

router.use('/users', require('./users'))
router.use('kittens', require('./kittens'))

router.use( function (req, res, next) {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
module.exports = router;
