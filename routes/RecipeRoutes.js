import express from 'express';
import {
	createRecipe,
	getAllRecipes,
	getRecipe,
	updateRecipe,
	deleteRecipe,
} from '../controllers/RecipeController.js';

const router = express.Router();
router.get('/', getAllRecipes);
router.get('/:id', getRecipe);
router.post('/', createRecipe);
router.put('/:id', updateRecipe);
router.put('/:id', deleteRecipe);

export default router;
