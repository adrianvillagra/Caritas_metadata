import db from '../database/db.js';
import { DataTypes } from 'sequelize';

const ProductModel = db.define('product', {
	title: { type: DataTypes.STRING },
	content: { type: DataTypes.STRING },
});

export default ProductModel;
