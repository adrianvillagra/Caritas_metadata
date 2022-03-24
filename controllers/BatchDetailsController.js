import BatchDetailsModel from '../models/BatchDetailModel.js';

export const getAllBatchDetails = async (request, response) => {
	try {
		const [result, metadata] = await BatchDetailsModel.sequelize.findAll();
		response.status(200).send({ message: 'Successfully', result });
	} catch (error) {
		response.json({ message: error.message });
	}
};

export const getBatchDetails = async (request, response) => {
	try {
		const product = await BatchDetailsModel.findAll({
			where: { id: request.params.id },
		});
		response.json(product[0]);
	} catch (error) {
		response.json({ message: error.message });
	}
};

export const createBatchDetails = async (request, response) => {
	try {
		const body = { ...request.body };
		const product = await BatchDetailsModel.create(body);
		response.status(200).send({ message: 'Successfully Created', product });
	} catch (error) {
		response.status(500).send({ message: error.message });
	}
};

export const updateBatchDetails = async (request, response) => {
	try {
		const product = await BatchDetailsModel.update(request.body, {
			where: { id: request.params.id },
		});
		response.status(200).send({ message: 'Successfully Updated', product });
	} catch (error) {
		response.status(500).send({ message: error.message });
	}
};

export const deleteBatchDetails = async (request, response) => {
	try {
		const product = await BatchDetailsModel.destroy({
			where: { id: request.params.id },
		});
		response.status(200).send({ message: 'Successfully deleted', product });
	} catch (error) {
		response.status(500).send({ message: error.message });
	}
};
