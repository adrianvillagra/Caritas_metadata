import db from '../database/db.js';
import { DataTypes } from 'sequelize';

const CalendarModel = db.define('calendars', {
	date: { type: DataTypes.DATE },
	recipe_id: { type: DataTypes.INTEGER },
	recipe_name: { type: DataTypes.STRING },
});

export default CalendarModel;
