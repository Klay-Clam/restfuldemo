var mongoose = require('../db');
var Schema = mongoose.Schema;

var usersSchema = new Schema({
    username: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        unique: true
    },
    password: String,
    firstLogin: Boolean,
    lastLoginTime: Date,
    keyToken: Object 
});

module.exports = mongoose.model('users',usersSchema);