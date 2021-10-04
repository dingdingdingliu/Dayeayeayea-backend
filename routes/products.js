const express = require('express');
const router = express.Router();
const Products = require('../controller/products')


router.get('/', Products.getAll);
router.get('/:id', Products.getOne);
router.post('/', Products.addOne);
router.patch('/:id', Products.updateOne);
router.delete('/:id', Products.deleteOne);

// router.get('/categories', Products);
// router.get('/categories/:id', Products);

module.exports = router;
