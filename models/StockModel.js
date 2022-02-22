import db from '../database/db.js';
import { DataTypes } from 'sequelize';

const StockModel = db.define('stock', {
	product_id: { type: DataTypes.INTEGER },
	quantity: { type: DataTypes.DOUBLE },
});

export default StockModel;
