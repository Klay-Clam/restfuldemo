var mongoose = require('../db');
var Schema = mongoose.Schema;

var topicsSchema = new Schema({
    title: String,
    tags: Array,
    content: String,
    publisheTime: Date,
    owns: String
})