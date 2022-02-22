import db from '../database/db.js';
import { DataTypes } from 'sequelize';

const ProductModel = db.define('types', {
	name: { type: DataTypes.STRING },
});

export default ProductModel;
