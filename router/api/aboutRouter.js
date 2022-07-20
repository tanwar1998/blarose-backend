const router = require('express').Router();
const AboutController = require('../../controllers/AboutController');
const auth = require('../../utils/auth');

router.get('/sstory', AboutController.getSStoryList);
router.post('/sstory', auth.isAuthunticated, AboutController.saveSStory);
router.put('/sstory/:id', auth.isAuthunticated, AboutController.updateSStory);
router.delete('/sstory/:id', auth.isAuthunticated, AboutController.deleteSStoryById);

router.get('/team', AboutController.getTeamList);
router.post('/team', auth.isAuthunticated, AboutController.saveTeam);
router.put('/team/:id', auth.isAuthunticated, AboutController.updateTeam);
router.delete('/team/:id', auth.isAuthunticated, AboutController.deleteTeamById);

router.get('/previousShow', AboutController.getPreviousShowList);
router.post('/previousShow', auth.isAuthunticated, AboutController.savePreviousShow);
router.put('/previousShow/:id', auth.isAuthunticated, AboutController.updatePreviousShow);
router.delete('/previousShow/:id', auth.isAuthunticated, AboutController.deletePreviousShowById);


module.exports = router;
