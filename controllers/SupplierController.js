import SupplierModel from '../models/SupplierModel.js';

export const getAllSuppliers = async (request, response) => {
	try {
		const suppliers = await SupplierModel.findAll();
		response.json(suppliers);
	} catch (error) {
		response.json({ message: error.message });
	}
};

export const getSupplier = async (request, response) => {
	try {
		const supplier = await SupplierModel.findAll({
			where: { id: request.params.id },
		});
		response.json(supplier[0]);
	} catch (error) {
		response.json({ message: error.message });
	}
};

export const createSupplier = async (request, response) => {
	try {
		const supplier = await SupplierModel.create(request.body);
		response.json(supplier);
	} catch (error) {
		response.json({ message: error.message });
	}
};

export const updateSupplier = async (request, response) => {
	try {
		const supplier = await SupplierModel.update({
			where: { id: request.params.id },
		});
		response.json(supplier);
	} catch (error) {
		response.json({ message: error.message });
	}
};

export const deleteSupplier = async (request, response) => {
	try {
		const supplier = await SupplierModel.destroy({
			where: { id: request.params.id },
		});
		response.json(supplier);
	} catch (error) {
		response.json({ message: error.message });
	}
};
