import RecipeDetailModel from '../models/RecipeDetailModel.js';

export const getAllRecipeDetails = async (request, response) => {
	try {
		const recipeDetails = await RecipeDetailModel.findAll();
		response.json(recipeDetails);
	} catch (error) {
		response.json({ message: error.message });
	}
};

export const getRecipeDetail = async (request, response) => {
	try {
		const recipeDetail = await RecipeDetailModel.findAll({
			where: { id: request.params.id },
		});
		response.json(recipeDetail);
	} catch (error) {
		response.json({ message: error.message });
	}
};

export const createRecipeDetail = async (request, response) => {
	try {
		const recipeDetail = await RecipeDetailModel.create(request.body);
		response.json(recipeDetail);
	} catch (error) {
		response.json({ message: error.message });
	}
};

export const updateRecipeDetail = async (request, response) => {
	try {
		const recipeDetail = await RecipeDetailModel.update({
			where: { id: request.params.id },
		});
		response.json(recipeDetail);
	} catch (error) {
		response.json({ message: error.message });
	}
};

export const deleteRecipeDetail = async (request, response) => {
	try {
		const recipeDetail = await RecipeDetailModel.destroy({
			where: { id: request.params.id },
		});
		response.json(recipeDetail);
	} catch (error) {
		response.json({ message: error.message });
	}
};
