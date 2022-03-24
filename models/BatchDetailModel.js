import db from '../database/db.js';
import { DataTypes } from 'sequelize';

const BatchDetailModel = db.define('batch_details', {
	days: { type: DataTypes.INTEGER },
	id: { type: DataTypes.INTEGER, primaryKey: true },
	batch_id: { type: DataTypes.INTEGER },
	period: { type: DataTypes.DATE },
});

export default BatchDetailModel;
