const express = require('express')
const router = express.Router()
const loggedHoursController = require('../controllers/loggedHours') 
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, loggedHoursController.getLoggedHours)

router.post('/createLoggedHours', loggedHoursController.createLoggedHours)

router.put('/markIncomplete', loggedHoursController.markIncomplete)

router.delete('/deleteLoggedHours', loggedHoursController.deleteLoggedHours)

module.exports = router