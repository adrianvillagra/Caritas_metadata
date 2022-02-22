import StockModel from '../models/StockModel.js';

export const getAllStock = async (request, response) => {
	try {
		const stocks = await StockModel.findAll();
		response.json(stocks);
	} catch (error) {
		response.json({ message: error.message });
	}
};

export const getStock = async (request, response) => {
	try {
		const stock = await StockModel.findAll({
			where: { id: request.params.id },
		});
		response.json(stock[0]);
	} catch (error) {
		response.json({ message: error.message });
	}
};

export const createStock = async (request, response) => {
	try {
		const stock = await StockModel.create(request.body);
		response.json(stock);
	} catch (error) {
		response.json({ message: error.message });
	}
};

export const updateStock = async (request, response) => {
	try {
		const stock = await StockModel.update({
			where: { id: request.params.id },
		});
		response.json(stock);
	} catch (error) {
		response.json({ message: error.message });
	}
};

export const deleteStock = async (request, response) => {
	try {
		const stock = await StockModel.destroy({
			where: { id: request.params.id },
		});
		response.json(stock);
	} catch (error) {
		response.json({ message: error.message });
	}
};
