import express from 'express';
import {
	createCalendar,
	getAllCalendars,
	getCalendar,
	updateCalendar,
	deleteCalendar,
} from '../controllers/CalendarController.js';

const router = express.Router();
router.get('/', getAllCalendars);
router.get('/:id', getCalendar);
router.post('/', createCalendar);
router.put('/:id', updateCalendar);
router.delete('/:id', deleteCalendar);

export default router;
