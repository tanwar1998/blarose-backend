
const multer = require('multer');
const router = require('express').Router();
const auth = require('../../utils/auth');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './upload');
     },
    filename: function (req, file, cb) {
        cb(null , (new Date().getTime() + file.originalname));
    }
});

var upload = multer({ storage: storage })

// router.use('/users', require('./usersRouter'));
// router.use('/home', require('./homeRouter'));
// router.use('/gallery', require('./galleryRouter'));
// router.use('/client', require('./clientRouter'));
// router.use('/about', require('./aboutRouter'));

// router.post('/upload',auth.isAuthunticated,  upload.single('file'), (req, res) => {
router.post('/upload', upload.single('file'), (req, res) => {
    try {
      res.send(req.file);
    }catch(err) {
        if (err instanceof multer.MulterError) {
            console.log('multer error while uploading data')
        } else if (err) {
            console.log('error', err)
        }
      res.send(400);
    }
  });


// router.use('/email', require('./sendEmail'));

// router.use('/', require('./authRouter'));

module.exports = router;
