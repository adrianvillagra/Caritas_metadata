import db from '../database/db.js';
import { DataTypes } from 'sequelize';

const ProductModel = db.define('products', {
	type_id: { type: DataTypes.INTEGER },
	measure_id: { type: DataTypes.INTEGER },
	name: { type: DataTypes.STRING },
});

export default ProductModel;
