const CartModel =  require("../../models/cart.model");

const getAllProductsService = async () => {
    return await CartModel.find();
}

module.exports = getAllProductsService;