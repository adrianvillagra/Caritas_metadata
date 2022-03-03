import express from 'express';
import {
	createSupplier,
	getAllSuppliers,
	getSupplier,
	updateSupplier,
	deleteSupplier,
} from '../controllers/SupplierController.js';

const router = express.Router();
router.get('/', getAllSuppliers);
router.get('/:id', getSupplier);
router.post('/', createSupplier);
router.put('/:id', updateSupplier);
router.delete('/:id', deleteSupplier);

export default router;
