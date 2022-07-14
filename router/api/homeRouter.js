const router = require('express').Router();
const HomeController = require('../../controllers/HomeController');
const auth = require('../../utils/auth');

router.get('/slides', HomeController.getSlidesList);
router.post('/slides', auth.isAuthunticated, HomeController.saveSlide);
router.put('/slides/:id', auth.isAuthunticated, HomeController.updateSlide);
router.delete('/slides/:id', auth.isAuthunticated, HomeController.deleteSlideById);

router.get('/story', HomeController.getStoryList);
router.post('/story', auth.isAuthunticated, HomeController.saveStory);
router.put('/story/:id', auth.isAuthunticated, HomeController.updateStory);
router.delete('/story/:id', auth.isAuthunticated, HomeController.deleteStoryById);

router.get('/experience', HomeController.getExperienceList);
router.post('/experience', auth.isAuthunticated, HomeController.saveExperience);
router.put('/experience/:id', auth.isAuthunticated, HomeController.updateExperience);
router.delete('/experience/:id', auth.isAuthunticated, HomeController.deleteExperienceById);

router.get('/service', HomeController.getServiceList);
router.post('/service', auth.isAuthunticated, HomeController.saveService);
router.put('/service/:id', auth.isAuthunticated, HomeController.updateService);
router.delete('/service/:id', auth.isAuthunticated, HomeController.deleteServiceById);


module.exports = router;
