import CalendarModel from '../models/CalendarModel.js';

export const getAllCalendars = async (request, response) => {
	try {
		const query =
			'SELECT calendars.id, calendars.date, calendars.recipe_id, recipes.name, batch_details.period_start, batch_details.batch_id, batch_details.period_end FROM calendars INNER JOIN recipes ON calendars.recipe_id = recipes.id INNER JOIN batch_details WHERE calendars.date BETWEEN batch_details.period_start and batch_details.period_end';
		const [result, metadata] = await CalendarModel.sequelize.query(query);
		response.status(200).send({ message: 'Successfully', result });
	} catch (error) {
		response.json({ message: error.message });
	}
};

export const getCalendar = async (request, response) => {
	try {
		const calendar = await CalendarModel.findAll({
			where: { id: request.params.id },
		});
		response.json(calendar[0]);
	} catch (error) {
		response.json({ message: error.message });
	}
};

export const createCalendar = async (request, response) => {
	try {
		const calendar = await CalendarModel.create(request.body);
		response.status(200).send({ message: 'Successfully Added', calendar });
	} catch (error) {
		response.status(500).send({ message: error.message });
	}
};

export const updateCalendar = async (request, response) => {
	console.log('requestUpdateCal:', request);
	try {
		const calendar = await CalendarModel.update(request.body, {
			where: { id: request.params.id },
		});
		response.status(200).send({ message: 'Successfully Updated', calendar });
	} catch (error) {
		response.status(500).send({ message: error.message });
	}
};

export const deleteCalendar = async (request, response) => {
	try {
		const calendar = await CalendarModel.destroy({
			where: { id: request.params.id },
		});
		response.json(calendar);
	} catch (error) {
		response.json({ message: error.message });
	}
};
