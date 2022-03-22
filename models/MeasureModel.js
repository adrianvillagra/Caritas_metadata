import db from '../database/db.js';
import { DataTypes } from 'sequelize';

const MeasureModel = db.define('measures', {
	name: { type: DataTypes.STRING },
});

export default MeasureModel;
