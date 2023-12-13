const {Router} = require('express')
const {getMoneda, postMoneda, putMoneda, deleteMoneda, getMonedaById} = require('../controllers/moneda')
const router = Router();

router.get('/', getMoneda);

router.get('/:id', getMonedaById);

router.post('/add', postMoneda),

router.put('/edit/:id', putMoneda);

router.delete('/delete/:id', deleteMoneda);

module.exports = router;
