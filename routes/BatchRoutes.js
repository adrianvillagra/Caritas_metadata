import express from 'express';
import {
	createBatch,
	getAllBatch,
	getBatch,
	updateBatch,
	deleteBatch,
} from '../controllers/BatchController.js';

const router = express.Router();
router.get('/', getAllBatch);
router.get('/:id', getBatch);
router.post('/', createBatch);
router.put('/:id', updateBatch);
router.delete('/:id', deleteBatch);

export default router;
