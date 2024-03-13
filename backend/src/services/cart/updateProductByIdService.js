const CartModel =  require("../../models/cart.model");

const updateProductByIdService = async(req) => {
    try {
        const {id} = req.body;
        console.log(id)
        const updateProduct = req.body;
        console.log(updateProduct);
        let updatedProduct = await CartModel.updateOne({id: id}, updateProduct);
                
        if (!updatedProduct) {
            return {statusCode: 404 , message:'No se ha podido actualizar el producto'}
        }    
    }
    catch(err) {
        return {statusCode: 400, message: "Error al actualizar el producto"}
    }   
    return {statusCode:200, message: 'Producto actualizado con éxito'}
}

module.exports = updateProductByIdService;