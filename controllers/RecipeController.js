import RecipeModel from '../models/RecipeModel.js';

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

export const getNewIdRecipe = async () => {
	try {
		const recipes = await RecipeModel.findAll();
		return recipes ? recipes?.length + 1 : parseInt(Math.random());
	} catch (error) {
		console.error({ message: error.message });
	}
};

export const createRecipe = async (request, response) => {
	try {
		const body = { ...request.body, id: await getNewIdRecipe() };
		console.log('bodyController:', body);
		const recipe = await RecipeModel.create(body);
		response.status(200).send({ message: 'Succesfuly Created', recipe });
	} catch (error) {
		response.status(500).send({ message: error.message });
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
