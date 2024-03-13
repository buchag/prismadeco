const CartModel =  require("../../models/cart.model");

const addProductService = async (req, res) => {
    const product = req.body;

    try {
        const newProduct = new CartModel(product);
        await newProduct.save();

        return {message: "Producto agregado al carrito"};
    }
    catch(err) {
        return {message: "Error al agregar producto"};
    }
};

module.exports = addProductService;