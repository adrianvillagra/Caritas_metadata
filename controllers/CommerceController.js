import CommerceModel from '../models/CommerceModel.js';

export const getAllCommerce = async (request, response) => {
	try {
		const commerces = await CommerceModel.findAll();
		response.status(200).send({ message: 'Successfully', commerces });
	} catch (error) {
		response.json({ message: error.message });
	}
};

export const getCommerce = async (request, response) => {
	try {
		const commerces = await CommerceModel.findAll({
			where: { id: request.params.id },
		});
		response.json(commerces[0]);
	} catch (error) {
		response.json({ message: error.message });
	}
};

export const createCommerce = async (request, response) => {
	try {
		const body = { ...request.body };
		const commerce = await CommerceModel.create(body);
		response.status(200).send({ message: 'Successfully Created', commerce });
	} catch (error) {
		response.status(500).send({ message: error.message });
	}
};

export const updateCommerce = async (request, response) => {
	try {
		const commerce = await CommerceModel.update(request.body, {
			where: { id: request.params.id },
		});
		response.status(200).send({ message: 'Successfully Updated', commerce });
	} catch (error) {
		response.status(500).send({ message: error.message });
	}
};

export const deleteCommerce = async (request, response) => {
	try {
		const commerce = await CommerceModel.destroy({
			where: { id: request.params.id },
		});
		response.status(200).send({ message: 'Successfully deleted', commerces });
	} catch (error) {
		response.status(500).send({ message: error.message });
	}
};
