import express from 'express';
import {
	createRecipeDetail,
	getAllRecipeDetails,
	getRecipeDetail,
	updateRecipeDetail,
	deleteRecipeDetail,
} from '../controllers/RecipeDetailsController.js';

const router = express.Router();
router.get('/', getAllRecipeDetails);
router.get('/:id', getRecipeDetail);
router.post('/', createRecipeDetail);
router.put('/:id', updateRecipeDetail);
router.delete('/:id', deleteRecipeDetail);

export default router;
