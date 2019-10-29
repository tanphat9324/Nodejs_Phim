const productService = require('../services/productService');

const findAll = (req, res) =>{
   let newRecord = productService();
   if(!newRecord){
       return res.status(500).json({
           status: false,
           message: 'Iternal server error!'
       })
   }
   return res.status(200).json({
       status: true,
       message: 'Get all success!',
       data: newRecord
   })
}

module.exports ={
    findAll
}