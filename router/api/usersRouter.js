const router = require('express').Router();
const UsersController = require('../../controllers/UsersController');
const AuthController = require('../../controllers/AuthController');
// const auth = require('../../utils/auth');

router.get('/list1', UsersController.getUserList);
router.post('/login', AuthController.login);


module.exports = router;
