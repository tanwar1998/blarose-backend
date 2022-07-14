const router = require('express').Router();
const ClientController = require('../../controllers/ClientController');
const auth = require('../../utils/auth');

router.get('/client', ClientController.getClientList);
router.post('/client', auth.isAuthunticated, ClientController.saveClient);
router.put('/client/:id', auth.isAuthunticated, ClientController.updateClient);
router.delete('/client/:id', auth.isAuthunticated, ClientController.deleteClientById);


module.exports = router;
