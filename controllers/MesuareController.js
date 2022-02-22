import MesuareModel from '../models/MesuareModel.js';

export const getAllMesuares = async (request, response) => {
	try {
		const mesuares = await MesuareModel.findAll();
		response.json(mesuares);
	} catch (error) {
		response.json({ message: error.message });
	}
};

export const getMesuare = async (request, response) => {
	try {
		const mesuare = await MesuareModel.findAll({
			where: { id: request.params.id },
		});
		response.json(mesuare);
	} catch (error) {
		response.json({ message: error.message });
	}
};

export const createMesuare = async (request, response) => {
	try {
		const mesuare = await MesuareModel.create(request.body);
		response.json(mesuare);
	} catch (error) {
		response.json({ message: error.message });
	}
};

export const updateMesuare = async (request, response) => {
	try {
		const mesuare = await MesuareModel.update({
			where: { id: request.params.id },
		});
		response.json(mesuare);
	} catch (error) {
		response.json({ message: error.message });
	}
};

export const deleteMesuare = async (request, response) => {
	try {
		const mesuare = await MesuareModel.destroy({
			where: { id: request.params.id },
		});
		response.json(mesuare);
	} catch (error) {
		response.json({ message: error.message });
	}
};
