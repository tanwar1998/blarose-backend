const Joi = require('joi');
const jwt = require('jsonwebtoken');
const _ = require('lodash');
const BaseController = require('../controllers/BaseController');
const RequestHandler = require('../utils/RequestHandler');
const Logger = require('../utils/logger');
const auth = require('../utils/auth');

const logger = new Logger();
const requestHandler = new RequestHandler(logger);

class HomeController extends BaseController {
	
	static async getSlidesList(req, res) {
		try {
			const result = await super.getList(req, 'Slides', {
				attributes: [`id`, `text`, `image`]});
			// const slide = _.omit(result.dataValues, ['createdAt', 'updatedAt']);
			return requestHandler.sendSuccess(res, 'Slides Data Extracted')({ result });
		} catch (error) {
			return requestHandler.sendError(req, res, error);
		}
	}

	static async saveSlide(req, res) {
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

			const createdSlide = await super.create(req, 'Slides');
			if (!(_.isNull(createdSlide))) {
				requestHandler.sendSuccess(res, 'slides added successfully', 201)();
			} else {
				requestHandler.throwError(422, 'Unprocessable Entity', 'unable to process the contained instructions')();
			}
		} catch (err) {
			requestHandler.sendError(req, res, err);
		}
	}

	static async updateSlide(req, res) {
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

			const createdSlide = await super.updateById(req, 'Slides');
			if (!(_.isNull(createdSlide))) {
				requestHandler.sendSuccess(res, 'slides updated successfully', 201)();
			} else {
				requestHandler.throwError(422, 'Unprocessable Entity', 'unable to process the contained instructions')();
			}
		} catch (err) {
			requestHandler.sendError(req, res, err);
		}
	}


	static async deleteSlideById(req, res) {
		try {
			const schema = Joi.object({
				id: Joi.number().integer().min(1),
			});
			const { error } = schema.validate({id: parseInt(req.params.id)});
			if(error){
				requestHandler.validateJoi(error, 400, 'bad Request', 'invalid Inputs');
				return false;
			}
			const result = await super.deleteById(req, 'Slides');
			return requestHandler.sendSuccess(res, 'Slides Deleted Successfully')({ result });
		} catch (err) {
			return requestHandler.sendError(req, res, err);
		}
	}


	static async getStoryList(req, res) {
		try {
			const result = await super.getList(req, 'SuccessStory', {
				attributes: [`id`, `text`]});
			return requestHandler.sendSuccess(res, 'Story Data Extracted')({ result });
		} catch (error) {
			return requestHandler.sendError(req, res, error);
		}
	}
	static async saveStory(req, res) {
		try {
			const data = req.body;
			const schema = Joi.object({
				text: Joi.string().required()
			});
			const { error } = schema.validate(data);
			if(error){
				requestHandler.validateJoi(error, 400, 'bad Request', 'invalid Inputs');
				return false;
			}

			const createdSlide = await super.create(req, 'SuccessStory');
			if (!(_.isNull(createdSlide))) {
				requestHandler.sendSuccess(res, 'story added successfully', 201)();
			} else {
				requestHandler.throwError(422, 'Unprocessable Entity', 'unable to process the contained instructions')();
			}
		} catch (err) {
			requestHandler.sendError(req, res, err);
		}
	}

	static async updateStory(req, res) {
		try {
			const data = req.body;
			const schema = Joi.object({
				text: Joi.string().required()
			});
			const { error } = schema.validate(data);
			if(error){
				requestHandler.validateJoi(error, 400, 'bad Request', 'invalid Inputs');
				return false;
			}

			const createdSlide = await super.updateById(req, 'SuccessStory');
			if (!(_.isNull(createdSlide))) {
				requestHandler.sendSuccess(res, 'story updated successfully', 201)();
			} else {
				requestHandler.throwError(422, 'Unprocessable Entity', 'unable to process the contained instructions')();
			}
		} catch (err) {
			requestHandler.sendError(req, res, err);
		}
	}

	static async deleteStoryById(req, res) {
		try {
			const schema = Joi.object({
				id: Joi.number().integer().min(1),
			});
			const { error } = schema.validate({id: parseInt(req.params.id)});
			if(error){
				requestHandler.validateJoi(error, 400, 'bad Request', 'invalid Inputs');
				return false;
			}
			const result = await super.deleteById(req, 'SuccessStory');
			return requestHandler.sendSuccess(res, 'Story Deleted Successfully')({ result });
		} catch (err) {
			return requestHandler.sendError(req, res, err);
		}
	}

	static async getExperienceList(req, res) {
		try {
			const result = await super.getList(req, 'Experience', {
				attributes: [`id`, `text`, `count`]});
			return requestHandler.sendSuccess(res, 'Experience Data Extracted')({ result });
		} catch (error) {
			return requestHandler.sendError(req, res, error);
		}
	}
	static async saveExperience(req, res) {
		try {
			const data = req.body;
			const schema = Joi.object({
				text: Joi.string().required(), 
				count: Joi.string().required(), 
			});
			const { error } = schema.validate(data);
			if(error){
				requestHandler.validateJoi(error, 400, 'bad Request', 'invalid Inputs');
				return false;
			}

			const createdSlide = await super.create(req, 'Experience');
			if (!(_.isNull(createdSlide))) {
				requestHandler.sendSuccess(res, 'Experience added successfully', 201)();
			} else {
				requestHandler.throwError(422, 'Unprocessable Entity', 'unable to process the contained instructions')();
			}
		} catch (err) {
			requestHandler.sendError(req, res, err);
		}
	}

	static async updateExperience(req, res) {
		try {
			const data = req.body;
			const schema = Joi.object({
				text: Joi.string().required(),
				count: Joi.string().required(), 
			});
			const { error } = schema.validate(data);
			if(error){
				requestHandler.validateJoi(error, 400, 'bad Request', 'invalid Inputs');
				return false;
			}

			const createdSlide = await super.updateById(req, 'Experience');
			if (!(_.isNull(createdSlide))) {
				requestHandler.sendSuccess(res, 'Experience updated successfully', 201)();
			} else {
				requestHandler.throwError(422, 'Unprocessable Entity', 'unable to process the contained instructions')();
			}
		} catch (err) {
			requestHandler.sendError(req, res, err);
		}
	}

	static async deleteExperienceById(req, res) {
		try {
			const schema = Joi.object({
				id: Joi.number().integer().min(1),
			});
			const { error } = schema.validate({id: parseInt(req.params.id)});
			if(error){
				requestHandler.validateJoi(error, 400, 'bad Request', 'invalid Inputs');
				return false;
			}
			const result = await super.deleteById(req, 'Experience');
			return requestHandler.sendSuccess(res, 'Experience Deleted Successfully')({ result });
		} catch (err) {
			return requestHandler.sendError(req, res, err);
		}
	}

	static async getServiceList(req, res) {
		try {
			const result = await super.getList(req, 'Services', {
				attributes: [`id`, `name`, `item`]});
			return requestHandler.sendSuccess(res, 'Services Data Extracted')({ result });
		} catch (error) {
			return requestHandler.sendError(req, res, error);
		}
	}
	static async saveService(req, res) {
		try {
			const data = req.body;
			const schema = Joi.object({
				name: Joi.string().required(), 
				item: Joi.string().required(), 
			});
			const { error } = schema.validate(data);
			if(error){
				requestHandler.validateJoi(error, 400, 'bad Request', 'invalid Inputs');
				return false;
			}

			const createdSlide = await super.create(req, 'Services');
			if (!(_.isNull(createdSlide))) {
				requestHandler.sendSuccess(res, 'Services added successfully', 201)();
			} else {
				requestHandler.throwError(422, 'Unprocessable Entity', 'unable to process the contained instructions')();
			}
		} catch (err) {
			requestHandler.sendError(req, res, err);
		}
	}

	static async updateService(req, res) {
		try {
			const data = req.body;
			const schema = Joi.object({
				name: Joi.string().required(),
				item: Joi.string().required(), 
			});
			const { error } = schema.validate(data);
			if(error){
				requestHandler.validateJoi(error, 400, 'bad Request', 'invalid Inputs');
				return false;
			}

			const createdSlide = await super.updateById(req, 'Services');
			if (!(_.isNull(createdSlide))) {
				requestHandler.sendSuccess(res, 'Services updated successfully', 201)();
			} else {
				requestHandler.throwError(422, 'Unprocessable Entity', 'unable to process the contained instructions')();
			}
		} catch (err) {
			requestHandler.sendError(req, res, err);
		}
	}

	static async deleteServiceById(req, res) {
		try {
			const schema = Joi.object({
				id: Joi.number().integer().min(1),
			});
			const { error } = schema.validate({id: parseInt(req.params.id)});
			if(error){
				requestHandler.validateJoi(error, 400, 'bad Request', 'invalid Inputs');
				return false;
			}
			const result = await super.deleteById(req, 'Services');
			return requestHandler.sendSuccess(res, 'Services Deleted Successfully')({ result });
		} catch (err) {
			return requestHandler.sendError(req, res, err);
		}
	}




}

module.exports = HomeController;
