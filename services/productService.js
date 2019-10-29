const Product = require('../models/product');

const findAllProduct = async () =>{
    return new Promise((resolve, reject) =>{
        await Product.find({status: 'Active'}, ['']).then((data) =>{
            resolve(data);
        }).catch((err) =>{
            reject(err);
        })
    })
}

module.exports = {
    findAllProduct
}