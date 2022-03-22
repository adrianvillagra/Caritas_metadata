import express from 'express';
import {
	createMeasure,
	getAllMeasures,
	getMeasure,
	updateMeasure,
	deleteMeasure,
} from '../controllers/MeasureController.js';

const router = express.Router();
router.get('/', getAllMeasures);
router.get('/:id', getMeasure);
router.post('/', createMeasure);
router.put('/:id', updateMeasure);
router.delete('/:id', deleteMeasure);

export default router;
