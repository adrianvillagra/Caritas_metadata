import TypeModel from '../models/TypeModel.js';

export const getAllTypes = async (request, response) => {
	try {
		const types = await TypeModel.findAll();
		response.json(types);
	} catch (error) {
		response.json({ message: error.message });
	}
};

export const getType = async (request, response) => {
	try {
		const type = await TypeModel.findAll({
			where: { id: request.params.id },
		});
		response.json(type);
	} catch (error) {
		response.json({ message: error.message });
	}
};

export const createType = async (request, response) => {
	try {
		const type = await TypeModel.create(request.body);
		response.json(type);
	} catch (error) {
		response.json({ message: error.message });
	}
};

export const updateType = async (request, response) => {
	try {
		const type = await TypeModel.update({
			where: { id: request.params.id },
		});
		response.json(type);
	} catch (error) {
		response.json({ message: error.message });
	}
};

export const deleteType = async (request, response) => {
	try {
		const type = await TypeModel.destroy({
			where: { id: request.params.id },
		});
		response.json(type);
	} catch (error) {
		response.json({ message: error.message });
	}
};
