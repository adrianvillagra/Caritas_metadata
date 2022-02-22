import db from '../database/db.js';
import { DataTypes } from 'sequelize';

const OrderDetailModel = db.define('order_details', {
	id: { type: DataTypes.INTEGER },
	order_id: { type: DataTypes.INTEGER },
	product_id: { type: DataTypes.INTEGER },
	quantity: { type: DataTypes.DOUBLE },
	price: { type: DataTypes.DOUBLE },
});

export default OrderDetailModel;
