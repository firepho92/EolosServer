const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Station = new Schema ({
	publicIP: { type: String },
	wlan: { type: String },
	ethlan: { type: String },
	user: { type: Schema.Types.ObjectId },
	status: { type: Boolean },
	latitude: { type: String },
	longitude: { type: String },
	model: { type: String }
})

module.exports = mongoose.model('Station', Station)