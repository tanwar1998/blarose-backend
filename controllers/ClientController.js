const Joi = require('joi');
const jwt = require('jsonwebtoken');
const _ = require('lodash');
const BaseController = require('../controllers/BaseController');
const RequestHandler = require('../utils/RequestHandler');
const Logger = require('../utils/logger');
const auth = require('../utils/auth');

const logger = new Logger();
const requestHandler = new RequestHandler(logger);

class ClientController extends BaseController {
	
	static async getClientList(req, res) {
		try {
			const result = await super.getList(req, 'Client', {
				attributes: [`id`, `text`, `image`]});
			return requestHandler.sendSuccess(res, 'Client Data Extracted')({ result });
		} catch (error) {
			return requestHandler.sendError(req, res, error);
		}
	}

	static async saveClient(req, res) {
		try {
			const data = req.body;
			const schema = Joi.object({
				image: Joi.string().required(),
				text: Joi.string().required()
			});
			const { error } = schema.validate(data);
			if(error){
				requestHandler.validateJoi(error, 400, 'bad Request', 'invalid Inputs');
				return false;
			}

			const createdSlide = await super.create(req, 'Client');
			if (!(_.isNull(createdSlide))) {
				requestHandler.sendSuccess(res, 'Client added successfully', 201)();
			} else {
				requestHandler.throwError(422, 'Unprocessable Entity', 'unable to process the contained instructions')();
			}
		} catch (err) {
			requestHandler.sendError(req, res, err);
		}
	}

	static async updateClient(req, res) {
		try {
			const data = req.body;
			const schema = Joi.object({
				image: Joi.string().required(),
				text: Joi.string().required()
			});
			const { error } = schema.validate(data);
			if(error){
				requestHandler.validateJoi(error, 400, 'bad Request', 'invalid Inputs');
				return false;
			}

			const createdSlide = await super.updateById(req, 'Client');
			if (!(_.isNull(createdSlide))) {
				requestHandler.sendSuccess(res, 'Client updated successfully', 201)();
			} else {
				requestHandler.throwError(422, 'Unprocessable Entity', 'unable to process the contained instructions')();
			}
		} catch (err) {
			requestHandler.sendError(req, res, err);
		}
	}

	static async deleteClientById(req, res) {
		try {
			const schema = Joi.object({
				id: Joi.number().integer().min(1),
			});
			const { error } = schema.validate({id: parseInt(req.params.id)});
			if(error){
				requestHandler.validateJoi(error, 400, 'bad Request', 'invalid Inputs');
				return false;
			}
			const result = await super.deleteById(req, 'Client');
			return requestHandler.sendSuccess(res, 'Client Deleted Successfully')({ result });
		} catch (err) {
			return requestHandler.sendError(req, res, err);
		}
	}

}

module.exports = ClientController;
