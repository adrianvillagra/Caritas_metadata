import db from '../database/db.js';
import { DataTypes } from 'sequelize';

const SupplierModel = db.define('suppliers', {
	id: { type: DataTypes.INTEGER },
	name: { type: DataTypes.STRING },
	cuil: { type: DataTypes.STRING },
	phone: { type: DataTypes.STRING },
	address: { type: DataTypes.STRING },
});

export default SupplierModel;
