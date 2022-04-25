import express from 'express';
import cors from 'cors';
import db from './database/db.js';
import productRoutes from './routes/ProductRoutes.js';
import calendarRoutes from './routes/CalendarRoutes.js';
import measureRoutes from './routes/MeasureRoutes.js';
import orderDetailRoutes from './routes/OrderDetailRoutes.js';
import recipeDetailRoutes from './routes/RecipeDetailRoutes.js';
import recipeRoutes from './routes/RecipeRoutes.js';
import stockRoutes from './routes/StockRoutes.js';
import supplierRoutes from './routes/SupplierRoutes.js';
import typeRoutes from './routes/TypeRoutes.js';
import batchRoutes from './routes/BatchRoutes.js';
import batchDetailRoutes from './routes/BatchDetailRoutes.js';
import commerceRoutes from './routes/CommerceRoutes.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/batch', batchRoutes);
app.use('/batch_details', batchDetailRoutes);
app.use('/calendars', calendarRoutes);
app.use('/measures', measureRoutes);
app.use('/order_details', orderDetailRoutes);
app.use('/products', productRoutes);
app.use('/recipes', recipeRoutes);
app.use('/recipe_details', recipeDetailRoutes);
app.use('/stock', stockRoutes);
app.use('/suppliers', supplierRoutes);
app.use('/types', typeRoutes);
app.use('/commerce', commerceRoutes);

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
