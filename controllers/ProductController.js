import ProductModel from '../models/ProductModel.js';
import TypeModel from '../models/TypeModel.js';
import MesuareModel from '../models/MesuareModel.js';

export const getAllProducts = async (request, response) => {
	try {
		// let products = await ProductModel.findAll({
		// 	include: {
		// 		model: TypeModel,
		// 		include: [{ model: MesuareModel }],
		// 	},
		// });
		const types = await TypeModel.findAll();
		const mesuares = await MesuareModel.findAll();
		let products = await ProductModel.findAll();
		let productsList = [];

		products.forEach((product) => {
			mesuares.forEach((mesuare) => {
				if (mesuare.id === product.mesuare_id) {
					productsList.push({
						...product.dataValues,
						mesuare_name: mesuare.name,
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
