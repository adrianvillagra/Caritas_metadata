import express from 'express';
import cors from 'cors';
import db from './database/db.js';
import productRoutes from './routes/ProductRoutes.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/products', productRoutes);

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
