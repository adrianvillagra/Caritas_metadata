import express from 'express';
import cors from 'cors';
import db from './database/db.js';
import productRoutes from './routes/ProductRoutes.js';
import calendarRoutes from './routes/CalendarRoutes.js';
import mesuareRoutes from './routes/MesuareRoutes.js';
import orderDetailRoutes from './routes/OrderDetailRoutes.js';
import recipeDetailRoutes from './routes/RecipeDetailRoutes.js';
import recipeRoutes from './routes/RecipeRoutes.js';
import stockRoutes from './routes/StockRoutes.js';
import supplierRoutes from './routes/SupplierRoutes.js';
import typeRoutes from './routes/TypeRoutes.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/products', productRoutes);
app.use('/calendars', calendarRoutes);
app.use('/mesuares', mesuareRoutes);
app.use('/order_details', orderDetailRoutes);
app.use('/recipe_details', recipeDetailRoutes);
app.use('/recipes', recipeRoutes);
app.use('/stock', stockRoutes);
app.use('/suppliers', supplierRoutes);
app.use('/types', typeRoutes);

try {
	await db.authenticate();
	console.log('Successful conecction');
} catch (error) {
	console.log(`Unsuccessful conecction: ${error}`);
}

app.get('/', (req, res) => {
	res.send('HELLO');
});

app.listen(8000, () => {
	console.log('Server UP running in https://localhost:8000');
});
