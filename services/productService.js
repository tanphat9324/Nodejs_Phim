const Phim = require('../models/phim');

const createOne = async(req, res) => {
    return  
}

const findAllProduct = async () =>{
    return new Promise((resolve, reject) =>{
        await Phim.find({status: 'Active'}, ['']).then((data) =>{
            resolve(data);
        }).catch((err) =>{
            reject(err);
        })
    })
}



module.exports = {
    findAllProduct
}