const getAllCartProductsService = require("../services/cart/getAllProductsService")
const addProductService = require("../services/cart/addProductService");
const deleteProductByIdService = require('../services/cart/deleteProductByIdService');

const getAllCartProductsController = async (_,res) => {
    const products = await getAllCartProductsService(); // el servicio es una función, va con parentesis para ejecutarse
    res.json(products)
}

const addProductToCartController = async (req,res) => {
    const product = await addProductService(req); 
    res.json(product)
}

const deleteProductByIdController = async (req, res) => {
    const product = await deleteProductByIdService(req); 
    res.json(product)
}

module.exports = {getAllCartProductsController, addProductToCartController, deleteProductByIdController}