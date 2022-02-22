import express from 'express';
import {
	createProduct,
	getAllProducts,
	getProduct,
	updateProduct,
	deleteProduct,
} from '../controllers/ProductController.js';

const router = express.Router();
router.get('/', getAllProducts);
router.get('/:id', getProduct);
router.post('/', createProduct);
router.put('/:id', updateProduct);
router.put('/:id', deleteProduct);

export default router;
