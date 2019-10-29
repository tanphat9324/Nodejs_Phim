const mongoose = require('mongoose');
const constants = require('../config/constants');
const Schema = mongoose.Schema;

const category = new Schema({
    title: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: constants.STATUS,
        default: 'Active'        
    }
},{
    collection: 'Category',
    timestamps: true
});

module.exports = mongoose.model('Category', category);
