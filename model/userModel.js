const mongoose = require('mongoose')

const UserModel = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    mobile: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    address: {
        type: String,
        required: true,
        trim: true
    }
},{
    collection: "users",
    timestamp: true
});

module.exports = mongoose.model("user", UserModel);