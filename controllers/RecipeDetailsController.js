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
		response.json(recipeDetail[0]);
	} catch (error) {
		response.json({ message: error.message });
	}
};

export const createRecipeDetail = async (request, response) => {
	try {
		let bodyDetails = '';
		for (const index in request.body) {
			bodyDetails += `(${request.body[index].recipe_id},${request.body[index].product_id},${request.body[index].quantity}),`;
		}
		bodyDetails = bodyDetails.substring(0, bodyDetails.length - 1);
		const query = `INSERT INTO recipe_details (recipe_id, product_id, quantity) VALUES ${bodyDetails}`;
		const [result, metadata] = await RecipeDetailModel.sequelize.query(query);
		response.status(200).send({ message: 'Successfully Created', result });
	} catch (error) {
		response.status(500).send({ message: error.message });
	}
};

export const updateRecipeDetail = async (request, response) => {
	try {
		let query = `DELETE FROM recipe_details WHERE recipe_id=${request.body[0].recipe_id}`;
		let [result, metadata] = await RecipeDetailModel.sequelize.query(query);
		let bodyDetails = '';
		for (const index in request.body) {
			bodyDetails += `(${request.body[index].recipe_id},${request.body[index].product_id},${request.body[index].quantity}),`;
		}
		bodyDetails = bodyDetails.substring(0, bodyDetails.length - 1);
		query = `INSERT INTO recipe_details (recipe_id, product_id, quantity) VALUES ${bodyDetails}`;
		[result, metadata] = await RecipeDetailModel.sequelize.query(query);
		console.log('resultUpdateAPI', result);
		response.status(200).send({ message: 'Succesfuly Updated', status: 'OK' });
	} catch (error) {
		response.status(500).send({ message: error.message });
	}
};

export const deleteRecipeDetail = async (request, response) => {
	try {
		const query = `DELETE FROM recipe_details WHERE recipe_id=${request.body[0].recipe_id}`;
		const [result, metadata] = await RecipeDetailModel.sequelize.query(query);
		response.status(200).send({ message: 'Succesfuly Deleted', status: 'OK' });
	} catch (error) {
		response.json({ message: error.message, status: 'ERROR' });
	}
};
