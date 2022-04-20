import BatchModel from '../models/BatchModel.js';

export const getAllBatch = async (request, response) => {
	try {
		const query =
			'SELECT batch.id, batch.total_days, batch_details.id, batch_details.period_start, batch_details.period_end  FROM batch_details INNER JOIN batch ON batch_details.batch_id = batch.id';
		const [result, metadata] = await BatchModel.sequelize.query(query);
		response.status(200).send({ message: 'Successfully', result });
	} catch (error) {
		response.json({ message: error.message });
	}
};

export const getBatch = async (request, response) => {
	try {
		const product = await BatchModel.findAll({
			where: { id: request.params.id },
		});
		response.json(product[0]);
	} catch (error) {
		response.json({ message: error.message });
	}
};

export const createBatch = async (request, response) => {
	try {
		const body = { ...request.body };
		const product = await BatchModel.create(body);
		response.status(200).send({ message: 'Successfully Created', product });
	} catch (error) {
		response.status(500).send({ message: error.message });
	}
};

export const updateBatch = async (request, response) => {
	try {
		const product = await BatchModel.update(request.body, {
			where: { id: request.params.id },
		});
		response.status(200).send({ message: 'Successfully Updated', product });
	} catch (error) {
		response.status(500).send({ message: error.message });
	}
};

export const deleteBatch = async (request, response) => {
	try {
		const product = await BatchModel.destroy({
			where: { id: request.params.id },
		});
		response.status(200).send({ message: 'Successfully deleted', product });
	} catch (error) {
		response.status(500).send({ message: error.message });
	}
};
