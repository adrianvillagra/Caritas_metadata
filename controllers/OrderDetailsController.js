import OrderDetailModel from '../models/OrderDetailModel.js';

export const getAllOrderDetails = async (request, response) => {
	try {
		const orderDetails = await OrderDetailModel.findAll();
		response.json(orderDetails);
	} catch (error) {
		response.json({ message: error.message });
	}
};

export const getOrderDetail = async (request, response) => {
	try {
		const orderDetail = await OrderDetailModel.findAll({
			where: { id: request.params.id },
		});
		response.json(orderDetail[0]);
	} catch (error) {
		response.json({ message: error.message });
	}
};

export const createOrderDetail = async (request, response) => {
	try {
		const orderDetail = await OrderDetailModel.create(request.body);
		response.json(orderDetail);
	} catch (error) {
		response.json({ message: error.message });
	}
};

export const updateOrderDetail = async (request, response) => {
	try {
		const orderDetail = await OrderDetailModel.update({
			where: { id: request.params.id },
		});
		response.json(orderDetail);
	} catch (error) {
		response.json({ message: error.message });
	}
};

export const deleteOrderDetail = async (request, response) => {
	try {
		const orderDetail = await OrderDetailModel.destroy({
			where: { id: request.params.id },
		});
		response.json(orderDetail);
	} catch (error) {
		response.json({ message: error.message });
	}
};
