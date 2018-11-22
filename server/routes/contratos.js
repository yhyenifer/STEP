var express = require('express');
var router = express.Router();

const contratoCtrl = require('../controllers/contratos.controller');

router.get('/', contratoCtrl.getContratos);
router.post('/', contratoCtrl.createContrato);
router.get('/:id', contratoCtrl.getContrato);
//router.put('/:id', contratoCtrl.updateContrato);
router.put('/delete/:id', contratoCtrl.deleteContrato);


module.exports = router;