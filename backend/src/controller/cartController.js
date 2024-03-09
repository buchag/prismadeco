const getAllCartProductsService = require("../services/cart/getAllProductsService")

const getAllCartProductsController = async (_,res) => {
    const products = await getAllCartProductsService(); // el servicio es una función, va con parentesis para ejecutarse
    res.json(products)
}

const addProductToCartController = async (req,res) => {
    const product = await addCartProductService(req); // el servicio es una función, va con parentesis para ejecutarse
    res.json(product)
}

module.exports = {getAllCartProductsController, addProductToCartController}