const router = require('express').Router();
//Database

router.get('/', async (req, res, next) => {
  try {

  } catch (error) {
    console.error('Error Getting All Kittens', error);
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {

  } catch (error) {
    console.error('Error Creating New Kittens', error);
    next(error);
  }
});

router.put('/:kittensId', async (req, res, next) => {
  try {

  } catch (error) {
    console.error('Error Updating Kittens', error);
    next(error);
  }
});

router.delete('/:kittensId', async (req, res, next) => {
  try {

  } catch (error) {
    console.error('Error Deleting Kittens', error)
    next(error)
  }
})

module.exports = router;
