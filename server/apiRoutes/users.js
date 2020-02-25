const router = require('express').Router();
//Database

router.get('/', async (req, res, next) => {
  try {

  } catch (error) {
    console.error('Error Getting All Users', error);
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {

  } catch (error) {
    console.error('Error Creating New User', error);
    next(error);
  }
});

router.put('/:userId', async (req, res, next) => {
  try {

  } catch (error) {
    console.error('Error Updating User', error);
    next(error);
  }
});

router.delete('/:userId', async (req, res, next) => {
  try {

  } catch (error) {
    console.error('Error Deleting User', error)
    next(error)
  }
})

module.exports = router;
