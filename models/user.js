const mongoose = require('mongoose');
const constant = require('../config/constants');
const Schemma = mongoose.Schema;

const user = new Schemma({
    taiKhoan: {
      type: String,
      required: true
    },
    hoTen: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    soDt: {
      type: String,
      required: true
    },
    matKhau: {
      type: String,
      required: true
    },
    maLoaiNguoiDung: {
      type: constant.MA_LOAI_NGUOI_DUNG,
      default:'KhachHang'
    }
},{
    collection: 'User',
    timestamps: true
});

module.exports = mongoose.model('User',user);