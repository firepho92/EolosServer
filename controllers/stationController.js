const { readStations, readStation, createStation, updateStation } = require('../services/stationService')

const getStations = async (req, res) => {
	const result = await readStations()
	res.status(200).send(result)
}

const getStation = async (req, res) => {
	const id = req.params['id']
	const result = await readStation(id)
	res.status(200).send(result)
}

const postStation = async (req, res) => {
	const { station } = req.body
	try {
		const result = await createStation(station)
		res.status(201).send(result)
	} catch(e) {
		console.log(e)
		res.sendStatus(500)
	}
}

const putStation = async (req, res) => {
	const { id, wlan, ethlan, publicIP, status } = req.body
	console.log(localIP + ' ' + externalIP)
	try {
		const result = await updateStation(id, wlan, ethlan, publicIP, status)
		res.status(200).send(result)
	} catch(e) {
		console.log(e)
		res.sendStatus(500)
	}
}

module.exports = {
	getStations,
	getStation,
	postStation,
	putStation
}