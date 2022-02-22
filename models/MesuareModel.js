import db from '../database/db.js';
import { DataTypes } from 'sequelize';

const MesuareModel = db.define('mesuares', {
	name: { type: DataTypes.STRING },
});

export default MesuareModel;
