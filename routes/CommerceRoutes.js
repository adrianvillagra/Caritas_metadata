import express from 'express';
import {
	createCommerce,
	getAllCommerce,
	getCommerce,
	updateCommerce,
	deleteCommerce,
} from '../controllers/CommerceController.js';

const router = express.Router();
router.get('/', getAllCommerce);
router.get('/:id', getCommerce);
router.post('/', createCommerce);
router.put('/:id', updateCommerce);
router.delete('/:id', deleteCommerce);

export default router;
