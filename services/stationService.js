const mongoose = require('mongoose')
const stationSchema = require('../models/station')
const StationModel = mongoose.model('Station')

const readStations = async () => {
	try {
		return await StationModel.find({})
	} catch(e) {
		throw e
	}
}

const readStation = async (id) => {
	try {
		return await StationModel.findById(id)
	} catch(e) {
		throw e
	}
}

const createStation = async (data) => {
	try {
		const station = new StationModel(data)
		return await station.save()
	} catch(e) {
		throw e
	}
}

const updateStation = async (id, wlan, ethlan, publicIP, status) => {
	try {
		return await StationModel.findByIdAndUpdate(id, { wlan: wlan, ethlan: ethlan, publicIP: publicIP, status: status })
	} catch(e) {
		throw e
	}
}

module.exports = {
	readStations,
	readStation,
	createStation,
	updateStation
}