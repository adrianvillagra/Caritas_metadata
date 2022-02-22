import CalendarModel from '../models/CalendarModel.js';

export const getAllCalendars = async (request, response) => {
	try {
		const calendars = await CalendarModel.findAll();
		response.json(calendars);
	} catch (error) {
		response.json({ message: error.message });
	}
};

export const getCalendar = async (request, response) => {
	try {
		const calendar = await CalendarModel.findAll({
			where: { id: request.params.id },
		});
		response.json(calendar);
	} catch (error) {
		response.json({ message: error.message });
	}
};

export const createCalendar = async (request, response) => {
	try {
		const calendar = await CalendarModel.create(request.body);
		response.json(calendar);
	} catch (error) {
		response.json({ message: error.message });
	}
};

export const updateCalendar = async (request, response) => {
	try {
		const calendar = await CalendarModel.update({
			where: { id: request.params.id },
		});
		response.json(calendar);
	} catch (error) {
		response.json({ message: error.message });
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
