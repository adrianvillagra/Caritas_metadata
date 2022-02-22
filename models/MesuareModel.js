import db from '../database/db.js';
import { DataTypes } from 'sequelize';

const MesuareModel = db.define('mesuares', {
	id: { type: DataTypes.INTEGER },
	name: { type: DataTypes.STRING },
});

export default MesuareModel;
