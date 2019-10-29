const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const phim = new Schema({
    maPhim:{
        type: Number,
        required: true
    },
    tenPhim:{
        type: String,
        required: true
    },
    biDanh:{
        type: String,
        required: true
    }, 
    trailer:{
        type: [String],
        required: true
    },
    hinhAnh:{
        type: String,
        required: true
    },
    moTa:{
        type: String,
        required: true
    },
    ngayKhoiChieu:{
        type: Date,
        required: true
    },
    danhGia:{
        type: Number,
        required: true
    }
},
{
    collection: 'Phim',
    timestamps: true
})

module.exports = mongoose.model('Phim', phim);