const { Router } = require('express')
//const { getUser, postUser } = require('../controllers/userController')
const { getStations, getStation, postStation, putStation } = require('../controllers/stationController')
const router = Router()

//Users
router.get('/users', async (req, res) => res.sendStatus(200))
//router.get('/user/:id', getUser)
//router.post('/user', postUser)

//Station
router.get('/stations', getStations)
router.get('/station/:id', getStation)
router.post('/station', postStation)
router.put('/station', putStation)

module.exports = router