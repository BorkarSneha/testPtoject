const express = require('express')
const router = express.Router()
const projectsController = require('../app/controllers/projectsController')
const employeesController = require('../app/controllers/employeesController')
const logsController = require('../app/controllers/logsController')

console.log('routes')
router.get('/projects',projectsController.list)
router.post('/projects/new',projectsController.create)

router.get('/employees',employeesController.list)
router.post('/employees/new',employeesController.create)

router.get('/logs', logsController.list)
router.post('/logs', logsController.create)
module.exports=router