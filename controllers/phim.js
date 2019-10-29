const Phim = require('../models/phim');
const productService = require('../services/productService');
const Userhandles = require('../shared/handles/user-handles');
const ResponseObject = require('../shared/models/response_object');

module.exports = {
  createOne: async(req, res) => {
    try{
      const dataUserToken = await Userhandles.checkUser({ token: req.headers.authorization});
      if(dataUserToken === null) {
        return res.status(404).json(new ResponseObject(
          400, 'Token expired'
        ));
      }
      const bodyPhim = {
        maPhim:req.body.maPhim,
        tenPhim:req.body.tenPhim,
        biDanh:req.body.biDanh,
        trailer:req.body.trailer,
        hinhAnh:req.body.hinhAnh,
        moTa:req.body.moTa,
        ngayKhoiChieu:req.body.ngayKhoiChieu,
        danhGia:req.body.danhGia,
      }
      Phim.create(bodyPhim).then((data) => {

      }).catch((err) => {

      })
    } catch(error) {
      return res.status(500).json(new ResponseObject(
        500,'Unexpected error', error
      ));
    }
  }
}

// const findAll = (req, res) =>{
//    let newRecord = productService();
//    if(!newRecord){
//        return res.status(500).json({
//            status: false,
//            message: 'Iternal server error!'
//        })
//    }
//    return res.status(200).json({
//        status: true,
//        message: 'Get all success!',
//        data: newRecord
//    })
// }

// module.exports ={
//     findAll
// }