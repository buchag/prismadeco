const CartModel =  require("../../models/cart.model");


const deleteProductByIdService = async(req) => {
    try {
        const {id} = req.params;
        let deleteProduct = await CartModel.deleteOne({id: id}); //eliminamos el registro cuyo _id coincida con el id que pasamos por parámetro.
        
        if (deleteProduct.deletedCount === 0) {
            return {statusCode: 404 , message:'El producto no existe'}
        }    
    }
    catch(err) {
        return {statusCode: 400, message: "Error al eliminar el producto"}
    }   
    return {statusCode:200, message: 'Producto eliminado!'}
}

module.exports = deleteProductByIdService;