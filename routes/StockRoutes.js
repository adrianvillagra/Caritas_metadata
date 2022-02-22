import express from 'express';
import {
	createStock,
	getAllStock,
	getStock,
	updateStock,
	deleteStock,
} from '../controllers/StockController.js';

const router = express.Router();
router.get('/', getAllStock);
router.get('/:id', getStock);
router.post('/', createStock);
router.put('/:id', updateStock);
router.put('/:id', deleteStock);

export default router;
