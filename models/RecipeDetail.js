import db from '../database/db.js';
import { DataTypes } from 'sequelize';

const RecipeDetailModel = db.define('recipe_details', {
	recipe_id: { type: DataTypes.INTEGER },
	product_id: { type: DataTypes.INTEGER },
	quantity: { type: DataTypes.DOUBLE },
});

export default RecipeDetailModel;
