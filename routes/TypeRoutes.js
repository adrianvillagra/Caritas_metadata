import express from 'express';
import {
	createType,
	getAllTypes,
	getType,
	updateType,
	deleteType,
} from '../controllers/TypeController.js';

const router = express.Router();
router.get('/', getAllTypes);
router.get('/:id', getType);
router.post('/', createType);
router.put('/:id', updateType);
router.delete('/:id', deleteType);

export default router;
