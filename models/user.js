const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	email: {
		type: String,
		required: 'Please enter email'
	},
	name: {
		type: String,
		required: 'Please enter name'
	},
	team: String,
	isAdmin: {
		type: Boolean,
		default: false
	},
	isMod: {
		type: Boolean,
		default: false
	}
});

const User = mongoose.model('User', userSchema);

module.exports = User;