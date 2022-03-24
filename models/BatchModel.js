import db from '../database/db.js';
import { DataTypes } from 'sequelize';

const BatchModel = db.define('batch', {
	total_days: { type: DataTypes.INTEGER },
	id: { type: DataTypes.INTEGER, primaryKey: true },
});

export default BatchModel;
