const Joi = require('joi');
const jwt = require('jsonwebtoken');
const _ = require('lodash');
const BaseController = require('../controllers/BaseController');
const RequestHandler = require('../utils/RequestHandler');
const Logger = require('../utils/logger');
const auth = require('../utils/auth');

const logger = new Logger();
const requestHandler = new RequestHandler(logger);

class AboutController extends BaseController {
	
	static async getSStoryList(req, res) {
		try {
			const result = await super.getList(req, 'AboutUSuccessStory', {
				attributes: [`id`, `text`, `date`, `location`]});
			return requestHandler.sendSuccess(res, 'SStory Data Extracted')({ result });
		} catch (error) {
			return requestHandler.sendError(req, res, error);
		}
	}

	static async saveSStory(req, res) {
		try {
			const data = req.body;
			const schema = Joi.object({
				location: Joi.string().required(),
				date: Joi.string().required(),
				text: Joi.string().required()
			});
			const { error } = schema.validate(data);
			if(error){
				requestHandler.validateJoi(error, 400, 'bad Request', 'invalid Inputs');
				return false;
			}

			const createdSlide = await super.create(req, 'AboutUSuccessStory');
			if (!(_.isNull(createdSlide))) {
				requestHandler.sendSuccess(res, 'SStory added successfully', 201)();
			} else {
				requestHandler.throwError(422, 'Unprocessable Entity', 'unable to process the contained instructions')();
			}
		} catch (err) {
			requestHandler.sendError(req, res, err);
		}
	}

	static async updateSStory(req, res) {
		try {
			const data = req.body;
			const schema = Joi.object({
				location: Joi.string().required(),
				date: Joi.string().required(),
				text: Joi.string().required()
			});
			const { error } = schema.validate(data);
			if(error){
				requestHandler.validateJoi(error, 400, 'bad Request', 'invalid Inputs');
				return false;
			}

			const createdSlide = await super.updateById(req, 'AboutUSuccessStory');
			if (!(_.isNull(createdSlide))) {
				requestHandler.sendSuccess(res, 'SStory updated successfully', 201)();
			} else {
				requestHandler.throwError(422, 'Unprocessable Entity', 'unable to process the contained instructions')();
			}
		} catch (err) {
			requestHandler.sendError(req, res, err);
		}
	}

	static async deleteSStoryById(req, res) {
		try {
			const schema = Joi.object({
				id: Joi.number().integer().min(1),
			});
			const { error } = schema.validate({id: parseInt(req.params.id)});
			if(error){
				requestHandler.validateJoi(error, 400, 'bad Request', 'invalid Inputs');
				return false;
			}
			const result = await super.deleteById(req, 'AboutUSuccessStory');
			return requestHandler.sendSuccess(res, 'SStory Deleted Successfully')({ result });
		} catch (err) {
			return requestHandler.sendError(req, res, err);
		}
	}


	static async getTeamList(req, res) {
		try {
			const result = await super.getList(req, 'Team', {
				attributes: [`id`, `name`, `position`, `email`, `image`, `text` ]});
			return requestHandler.sendSuccess(res, 'Team Data Extracted')({ result });
		} catch (error) {
			return requestHandler.sendError(req, res, error);
		}
	}

	static async saveTeam(req, res) {
		try {
			const data = req.body;
			const schema = Joi.object({
				name: Joi.string().required(),
				position: Joi.string().required(),
				email: Joi.string().required(),
				image: Joi.string().required(),
				text: Joi.string().required()
			});
			const { error } = schema.validate(data);
			if(error){
				requestHandler.validateJoi(error, 400, 'bad Request', 'invalid Inputs');
				return false;
			}

			const createdSlide = await super.create(req, 'Team');
			if (!(_.isNull(createdSlide))) {
				requestHandler.sendSuccess(res, 'Team added successfully', 201)();
			} else {
				requestHandler.throwError(422, 'Unprocessable Entity', 'unable to process the contained instructions')();
			}
		} catch (err) {
			requestHandler.sendError(req, res, err);
		}
	}

	static async updateTeam(req, res) {
		try {
			const data = req.body;
			const schema = Joi.object({
				name: Joi.string().required(),
				position: Joi.string().required(),
				email: Joi.string().required(),
				image: Joi.string().required(),
				text: Joi.string().required()
			});
			const { error } = schema.validate(data);
			if(error){
				requestHandler.validateJoi(error, 400, 'bad Request', 'invalid Inputs');
				return false;
			}

			const createdSlide = await super.updateById(req, 'Team');
			if (!(_.isNull(createdSlide))) {
				requestHandler.sendSuccess(res, 'Team updated successfully', 201)();
			} else {
				requestHandler.throwError(422, 'Unprocessable Entity', 'unable to process the contained instructions')();
			}
		} catch (err) {
			requestHandler.sendError(req, res, err);
		}
	}

	static async deleteTeamById(req, res) {
		try {
			const schema = Joi.object({
				id: Joi.number().integer().min(1),
			});
			const { error } = schema.validate({id: parseInt(req.params.id)});
			if(error){
				requestHandler.validateJoi(error, 400, 'bad Request', 'invalid Inputs');
				return false;
			}
			const result = await super.deleteById(req, 'Team');
			return requestHandler.sendSuccess(res, 'Team Deleted Successfully')({ result });
		} catch (err) {
			return requestHandler.sendError(req, res, err);
		}
	}



	static async getPreviousShowList(req, res) {
		try {
			const result = await super.getList(req, 'PreviousShow', {
				attributes: [`id`, `city`, `venue`, `date`, `days`, `image`]});
			return requestHandler.sendSuccess(res, 'PreviousShow Data Extracted')({ result });
		} catch (error) {
			return requestHandler.sendError(req, res, error);
		}
	}

	static async savePreviousShow(req, res) {
		try {
			const data = req.body;
			const schema = Joi.object({
				city: Joi.string().required(),
				venue: Joi.string().required(),
				date: Joi.string().required(),
				days: Joi.string().required(),
				image: Joi.string().required(),
			});
			const { error } = schema.validate(data);
			if(error){
				requestHandler.validateJoi(error, 400, 'bad Request', 'invalid Inputs');
				return false;
			}

			const createdSlide = await super.create(req, 'PreviousShow');
			if (!(_.isNull(createdSlide))) {
				requestHandler.sendSuccess(res, 'PreviousShow added successfully', 201)();
			} else {
				requestHandler.throwError(422, 'Unprocessable Entity', 'unable to process the contained instructions')();
			}
		} catch (err) {
			requestHandler.sendError(req, res, err);
		}
	}

	static async updatePreviousShow(req, res) {
		try {
			const data = req.body;
			const schema = Joi.object({
				city: Joi.string().required(),
				venue: Joi.string().required(),
				date: Joi.string().required(),
				days: Joi.string().required(),
				image: Joi.string().required(),
			});
			const { error } = schema.validate(data);
			if(error){
				requestHandler.validateJoi(error, 400, 'bad Request', 'invalid Inputs');
				return false;
			}

			const createdSlide = await super.updateById(req, 'PreviousShow');
			if (!(_.isNull(createdSlide))) {
				requestHandler.sendSuccess(res, 'PreviousShow updated successfully', 201)();
			} else {
				requestHandler.throwError(422, 'Unprocessable Entity', 'unable to process the contained instructions')();
			}
		} catch (err) {
			requestHandler.sendError(req, res, err);
		}
	}

	static async deletePreviousShowById(req, res) {
		try {
			const schema = Joi.object({
				id: Joi.number().integer().min(1),
			});
			const { error } = schema.validate({id: parseInt(req.params.id)});
			if(error){
				requestHandler.validateJoi(error, 400, 'bad Request', 'invalid Inputs');
				return false;
			}
			const result = await super.deleteById(req, 'PreviousShow');
			return requestHandler.sendSuccess(res, 'PreviousShow Deleted Successfully')({ result });
		} catch (err) {
			return requestHandler.sendError(req, res, err);
		}
	}

}

module.exports = AboutController;
