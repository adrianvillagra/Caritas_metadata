import MeasureModel from '../models/MeasureModel.js';

export const getAllMeasures = async (request, response) => {
	try {
		const measures = await MeasureModel.findAll();
		response.json(measures);
	} catch (error) {
		response.json({ message: error.message });
	}
};

export const getMeasure = async (request, response) => {
	try {
		const measure = await MeasureModel.findAll({
			where: { id: request.params.id },
		});
		response.json(measure[0]);
	} catch (error) {
		response.json({ message: error.message });
	}
};

export const createMeasure = async (request, response) => {
	try {
		const measure = await MeasureModel.create(request.body);
		response.json(measure);
	} catch (error) {
		response.json({ message: error.message });
	}
};

export const updateMeasure = async (request, response) => {
	try {
		const measure = await MeasureModel.update({
			where: { id: request.params.id },
		});
		response.json(measure);
	} catch (error) {
		response.json({ message: error.message });
	}
};

export const deleteMeasure = async (request, response) => {
	try {
		const measure = await MeasureModel.destroy({
			where: { id: request.params.id },
		});
		response.json(measure);
	} catch (error) {
		response.json({ message: error.message });
	}
};
