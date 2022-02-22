import express from 'express';
import {
	createOrderDetail,
	getAllOrderDetails,
	getOrderDetail,
	updateOrderDetail,
	deleteOrderDetail,
} from '../controllers/OrderDetailController.js';

const router = express.Router();
router.get('/', getAllOrderDetails);
router.get('/:id', getOrderDetail);
router.post('/', createOrderDetail);
router.put('/:id', updateOrderDetail);
router.put('/:id', deleteOrderDetail);

export default router;
