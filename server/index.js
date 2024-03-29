const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const compression = require('compression');
const uuid = require('uuid');
const config = require('../config/appconfig');
// const bcrypt = require('bcrypt');
// const Logger = require('../utils/logger.js');

// const logger = new Logger();
const app = express();
app.set('config', config); // the system configrationsx
app.use(bodyParser.json());
app.use(require('method-override')());
app.use(compression());
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});
const corsOptions = {
	credentials: true,
	origin: true,
};
app.use(cors(corsOptions));
// const swagger = require('../utils/swagger');


// process.on('SIGINT', () => {
// 	logger.log('stopping the server', 'info');
// 	process.exit();
// });

app.use(express.static('upload'))

// this is the line to disable db connection
// app.set('db', require('../models/index.js'));

app.set('port', process.env.PORT);
// app.use('/api/docs', swagger.router);

// app.use((req, res, next) => {
// 	req.identifier = uuid();
// 	const logString = `a request has been made with the following uuid [${req.identifier}] ${req.url} ${req.headers['user-agent']} ${JSON.stringify(req.body)}`;
// 	logger.log(logString, 'info');
// 	next();
// });

// const hashedPass = bcrypt.hashSync('123456', config.auth.saltRounds);

// console.log('hashedPass>>>>>>>>>>>>>>>>', hashedPass)

app.use(require('../router'));

app.use((req, res, next) => {
	// logger.log('the url you are trying to reach is not hosted on our server', 'error');
	const err = new Error('Not Found');
	err.status = 404;
	res.status(err.status).json({ type: 'error', message: 'the url you are trying to reach is not hosted on our server' });
	next(err);
});

module.exports = app;
