const router = require('express').Router();
const HomeController = require('../../controllers/HomeController');
const auth = require('../../utils/auth');

router.get('/slides', auth.isAuthunticated, HomeController.getSlidesList);
router.post('/slides', auth.isAuthunticated, HomeController.saveSlide);
router.delete('/slides/:id', auth.isAuthunticated, HomeController.deleteSlideById);

router.get('/story', auth.isAuthunticated, HomeController.getStoryList);
router.post('/story', auth.isAuthunticated, HomeController.saveStory);
router.delete('/story/:id', auth.isAuthunticated, HomeController.deleteStoryById);


module.exports = router;
