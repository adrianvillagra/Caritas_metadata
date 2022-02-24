import db from '../database/db.js';
import { DataTypes } from 'sequelize';

const TypeModel = db.define('types', {
	name: { type: DataTypes.STRING },
	id: { type: DataTypes.STRING, primaryKey: true },
});

export default TypeModel;
