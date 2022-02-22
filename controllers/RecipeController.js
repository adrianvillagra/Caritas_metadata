import RecipeModel from '../models/RecipeDetail.js';

export const getAllRecipes = async (request, response) => {
	try {
		const recipes = await RecipeModel.findAll();
		response.json(recipes);
	} catch (error) {
		response.json({ message: error.message });
	}
};

export const getRecipe = async (request, response) => {
	try {
		const recipe = await RecipeModel.findAll({
			where: { id: request.params.id },
		});
		response.json(recipe[0]);
	} catch (error) {
		response.json({ message: error.message });
	}
};

export const createRecipe = async (request, response) => {
	try {
		const recipe = await RecipeModel.create(request.body);
		response.json(recipe);
	} catch (error) {
		response.json({ message: error.message });
	}
};

export const updateRecipe = async (request, response) => {
	try {
		const recipe = await RecipeModel.update({
			where: { id: request.params.id },
		});
		response.json(recipe);
	} catch (error) {
		response.json({ message: error.message });
	}
};

export const deleteRecipe = async (request, response) => {
	try {
		const recipe = await RecipeModel.destroy({
			where: { id: request.params.id },
		});
		response.json(recipe);
	} catch (error) {
		response.json({ message: error.message });
	}
};
