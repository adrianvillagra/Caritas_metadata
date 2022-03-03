import db from '../database/db.js';
import { DataTypes } from 'sequelize';

const RecipeModel = db.define('recipes', {
	name: { type: DataTypes.STRING },
	id: { type: DataTypes.INTEGER, primaryKey: true },
});

export default RecipeModel;
