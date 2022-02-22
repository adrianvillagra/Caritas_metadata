import ProductModel from '../models/ProductModel.js';

export const getAllProducts = async (request, response) => {
	try {
		const products = await ProductModel.findAll();
		response.json(products);
	} catch (error) {
		response.json({ message: error.message });
	}
};

export const getProduct = async (request, response) => {
	try {
		const product = await ProductModel.findAll({
			where: { id: request.params.id },
		});
		response.json(product);
	} catch (error) {
		response.json({ message: error.message });
	}
};

export const createProduct = async (request, response) => {
	try {
		const product = await ProductModel.create(request.body);
		response.json(product);
	} catch (error) {
		response.json({ message: error.message });
	}
};

export const updateProduct = async (request, response) => {
	try {
		const product = await ProductModel.update({
			where: { id: request.params.id },
		});
		response.json(product);
	} catch (error) {
		response.json({ message: error.message });
	}
};

export const deleteProduct = async (request, response) => {
	try {
		const product = await ProductModel.destroy({
			where: { id: request.params.id },
		});
		response.json(product);
	} catch (error) {
		response.json({ message: error.message });
	}
};
