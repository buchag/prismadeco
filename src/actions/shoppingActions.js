    //Acciones del carrito de compras
export const TYPES = {
    READ_STATE: "READ_STATE", //Lee el estado del carrito desde DB.json
    ADD_TO_CART:"ADD_TO_CART", //agrega el producto al carrito, suma la cantidad si ya existe
    REMOVE_ONE_PRODUCT:"REMOVE_ONE_PRODUCT",//remueve 1 unidad del producto
    REMOVE_ALL_PRODUCTS:"REMOVE_ALL_PRODUCTS",//remueve todas las unidades del producto
    CLEAR_CART:"CLEAR_CART" //limpiar carrito
}

