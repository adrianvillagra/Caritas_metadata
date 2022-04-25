import db from '../database/db.js';
import { DataTypes } from 'sequelize';

const CommerceModel = db.define('commerce', {
	name: { type: DataTypes.STRING },
	cuit: { type: DataTypes.STRING },
	address: { type: DataTypes.STRING },
	createdAt: { type: DataTypes.DATE },
	updatedAt: { type: DataTypes.DATE },
	socialReason: { type: DataTypes.STRING },
	id: { type: DataTypes.INTEGER, primaryKey: true },
});

export default CommerceModel;
