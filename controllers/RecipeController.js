import RecipeModel from '../models/RecipeModel.js';
import RecipeDetailModel from '../models/RecipeDetailModel.js';

export const getAllRecipes = async (request, response) => {
	try {
		const recipes = await RecipeModel.findAll();
		const resp = { recipes, total: recipes.length };
		response.json(resp);
	} catch (error) {
		response.json({ message: error.message });
	}
};

export const getRecipe = async (request, response) => {
	try {
		let query = `SELECT recipes.name AS recipeName, products.name AS productName, products.id AS productId, measures.name AS measure, recipe_details.quantity as quantity FROM recipes INNER JOIN recipe_details oN recipes.id = recipe_details.recipe_id  INNER JOIN products ON recipe_details.product_id = products.id inner JOIn measures ON products.measure_id = measures.id WHERE recipes.id=${request.params.id}`;
		const [result, metadata] = await RecipeDetailModel.sequelize.query(query);
		if (result?.length) {
			response.json(result);
		} else {
			query = `SELECT recipes.name AS recipeName FROM recipes WHERE recipes.id=${request.params.id}`;
			const [result, metadata] = await RecipeDetailModel.sequelize.query(query);
			response.json(result);
		}
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
		const recipeName = { ...request.body };
		let query = `INSERT INTO recipes (name) VALUES (${recipeName})`;
		const [result, metadata] = await RecipeModel.sequelize.query(query);
		response.status(200).send({ message: 'Successfully Created', result });
	} catch (error) {
		response.status(500).send({ message: error.message });
	}
};

export const updateRecipe = async (request, response) => {
	try {
		const recipe = await RecipeModel.update(request.body, {
			where: { id: request.params.id },
		});
		response
			.status(200)
			.send({ message: 'Succesfuly updated', recipe, status: 'OK' });
	} catch (error) {
		response.status(500).send({ message: error.message });
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
