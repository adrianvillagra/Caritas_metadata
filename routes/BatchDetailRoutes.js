import express from 'express';
import {
	createBatchDetails,
	getAllBatchDetails,
	getBatchDetails,
	updateBatchDetails,
	deleteBatchDetails,
} from '../controllers/BatchDetailsController.js';

const router = express.Router();
router.get('/', getAllBatchDetails);
router.get('/:id', getBatchDetails);
router.post('/', createBatchDetails);
router.put('/:id', updateBatchDetails);
router.delete('/:id', deleteBatchDetails);

export default router;
