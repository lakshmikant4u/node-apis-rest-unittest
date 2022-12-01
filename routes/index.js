
const { Router } = require('express');
const controllers = require('../controllers');

const router = Router();

router.get('/', (req, res) => res.send('Welcome'))

router.post('/book', controllers.createBook);
router.get('/books', controllers.getBooks);

module.exports = router;