const router = require('express').Router();
// const UsersController = require('../../controllers/UsersController');
// const auth = require('../../utils/auth');

router.get('/hello', function(req, res){
    res.send({ title: 'GeeksforGeeks' });
});


module.exports = router;
