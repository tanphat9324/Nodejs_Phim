const mongoose = require('mongoose');
const constants = require('../config/constants');
const Schema = mongoose.Schema;

const product = new Schema({
    title:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    status:{
        type: String,
        enum: constants.STATUS,
        default: 'Active'
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        require: true
    },
    description: String
},
{
    collection: 'Product',
    timestamps: true
})

module.exports = mongoose.model('Product', product);