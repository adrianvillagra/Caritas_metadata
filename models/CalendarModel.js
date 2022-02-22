import db from '../database/db.js';
import { DataTypes } from 'sequelize';

const CalendarModel = db.define('calendars', {
	id: { type: DataTypes.INTEGER },
	date: { type: DataTypes.DATE },
	recipe_id: { type: DataTypes.INTEGER },
});

export default CalendarModel;