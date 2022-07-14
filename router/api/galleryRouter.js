const router = require('express').Router();
const GalleryController = require('../../controllers/GalleryController');
const auth = require('../../utils/auth');

router.get('/gallery', GalleryController.getGalleryList);
router.post('/gallery', auth.isAuthunticated, GalleryController.saveGallery);
router.put('/gallery/:id', auth.isAuthunticated, GalleryController.updateGallery);
router.delete('/gallery/:id', auth.isAuthunticated, GalleryController.deleteGalleryById);


module.exports = router;
