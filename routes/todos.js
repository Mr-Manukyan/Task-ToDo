const express = require('express')
const router = express.Router()
const controller = require('../controllers/todos.js')

router.get('/', controller.getAllToDos)
router.post('/create', controller.createToDo)
router.delete('/delete/:id', controller.deleteOneToDo)
router.patch('/update/isDone', controller.updateToDoIsDone)
router.patch('/update/data', controller.updateOneToDoData)


module.exports = router