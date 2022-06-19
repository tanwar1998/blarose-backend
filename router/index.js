

const router = require('express').Router();


router.use('/api/v1', require('./api/index.js'));


module.exports = router;
