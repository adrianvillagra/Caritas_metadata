import express from 'express';
import {
	createMesuare,
	getAllMesuares,
	getMesuare,
	updateMesuare,
	deleteMesuare,
} from '../controllers/MesuareController.js';

const router = express.Router();
router.get('/', getAllMesuares);
router.get('/:id', getMesuare);
router.post('/', createMesuare);
router.put('/:id', updateMesuare);
router.delete('/:id', deleteMesuare);

export default router;
