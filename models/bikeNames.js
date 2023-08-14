const mongoose = require('mongoose');

const bikeNamesSchema = new mongoose.Schema({
bikeName : { type:  String, description: "Required Field", required: false },
});

module.exports = mongoose.model('bikeNames', bikeNamesSchema);