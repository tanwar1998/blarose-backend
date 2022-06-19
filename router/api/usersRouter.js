const router = require('express').Router();
// const UsersController = require('../../controllers/UsersController');
// const auth = require('../../utils/auth');

router.get('/hello', function(req, res){
    req.app.get('db').query('SELECT * FROM login', (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
        })

    // res.send({ title: 'GeeksforGeeks' });
});


module.exports = router;
