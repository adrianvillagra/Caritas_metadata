import { Sequelize } from 'sequelize';

const db = new Sequelize('caritas_db', 'admin', 'AdminRoot1!', {
	host: 'localhost',
	dialect: 'mysql',
});

export default db;
