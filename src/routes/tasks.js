const router = require('express').Router();
const taskController = require('../controllers/tasks');

router.get('/tasks', taskController.listarTarefa);
router.post('/tasks', taskController.criarNovaTarefa);
router.delete('/tasks/:id', taskController.deletarTarefa);

module.exports = router;