import express from 'express';
import cors from 'cors';
import db from './database/db.js';
import productRoutes from './routes/routes.js';
import measureRoutes from './routes/MeasureRoutes';
import calendarRoutes from './routes/calendarRoutes.js';
import orderDetailRoutes from './routes/orderDetailRoutes.js';
import recipeRoutes from './routes/recipeRoutes.js';
import recipeDetailsRoutes from './routes/recipeDetailsRoutes.js';
import stockRoutes from './routes/stockRoutes.js';
import supplierRoutes from './routes/supplyRoutes.js';
import typeRoutes from './routes/TypeRoutes.js';
import batchRoutes from './routes/BatchRoutes.js';
import batchDetailRoutes from './routes/BatchDetailRoute.js';
import commerceRoutes from './routes/CommerceRoutes.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/commerce', commerceRoutes);
app.use('/batch', batchRoutes);
app.use('/batch_details', batchDetailRoutes);
app.use('/products', productRoutes);
app.use('/measure', measureRoutes);
app.use('/calendars', calendarRoutes);
app.use('/order_details', orderDetailRoutes);
app.use('/recipes', recipeRoutes);
app.use('/recipes_details', recipeDetailsRoutes);
app.use('/stock', stockRoutes);
app.use('/supplier', supplierRoutes);
app.use('/types', typeRoutes);

try {
	await db.authenticate();
	console.log('Successful connection');
} catch (error) {
	console.log(`Unsuccessful connection: ${error}`);
}

app.get('/', (req, res) => {
	res.send('HELLO');
});

app.listen(8000, () => {
	console.log('Server UP running in https://localhost:8000');
});
