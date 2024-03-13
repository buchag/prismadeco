const express = require('express');
const {getAllCartProductsController, addProductToCartController, deleteProductByIdController} = require('../controller/cartController');
const validationMiddleware = require('../utils/cartValidator');
const {body} = require ('express-validator'); //lo utilizamos luego para validar los datos que ingresan por el body
const productRouter = express.Router();


productRouter.get('/', getAllCartProductsController)

productRouter.post('/',
    validationMiddleware,       
    addProductToCartController
)

productRouter.delete('/:id', deleteProductByIdController)

module.exports = productRouter;
