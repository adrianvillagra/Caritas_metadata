import ProductModel from '../models/ProductModel.js';
import TypeModel from '../models/TypeModel.js';
import MeasureModel from '../models/MeasureModel.js';

export const getAllProducts = async (request, response) => {
	try {
		const types = await TypeModel.findAll();
		const measures = await MeasureModel.findAll();
		let products = await ProductModel.findAll();
		let productsList = [];

		products.forEach((product) => {
			measures.forEach((measure) => {
				if (measure.id === product.measure_id) {
					productsList.push({
						...product.dataValues,
						measure: measure.name,
					});
				}
			});
		});

		types.forEach((type) => {
			products.forEach((product, index) => {
				if (type.id === product.type_id)
					productsList[index].type_name = type.name;
			});
		});

		const resp = { products: productsList, total: productsList.length };

		response.json(resp);
	} catch (error) {
		response.json({ message: error.message });
	}
};

export const getNewIdProduct = async () => {
	try {
		const product = await ProductModel.findAll();
		return product[product.length].id + 1;
	} catch (error) {
		console.error({ message: error.message });
	}
};

export const getProduct = async (request, response) => {
	try {
		const product = await ProductModel.findAll({
			where: { id: request.params.id },
		});
		response.json(product[0]);
	} catch (error) {
		response.json({ message: error.message });
	}
};

export const createProduct = async (request, response) => {
	try {
		const body = { ...request.body, id: await getNewIdProduct() };
		const product = await ProductModel.create(body);
		response.status(200).send({ message: 'Successfully Created', product });
	} catch (error) {
		response.status(500).send({ message: error.message });
	}
};

export const updateProduct = async (request, response) => {
	try {
		const product = await ProductModel.update(request.body, {
			where: { id: request.params.id },
		});
		response.status(200).send({ message: 'Successfully Updated', product });
	} catch (error) {
		response.status(500).send({ message: error.message });
	}
};

export const deleteProduct = async (request, response) => {
	try {
		const product = await ProductModel.destroy({
			where: { id: request.params.id },
		});
		response.status(200).send({ message: 'Successfully deleted', product });
	} catch (error) {
		response.status(500).send({ message: error.message });
	}
};
