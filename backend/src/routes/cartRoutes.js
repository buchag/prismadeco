const express = require('express');
const {getAllCartProductsController, addProductToCartController, deleteProductByIdController, updateProductByIdController} = require('../controller/cartController');
const {validationMiddleware, validatorIdMiddleware} = require('../utils/cartValidator');
const {body} = require ('express-validator'); //lo utilizamos luego para validar los datos que ingresan por el body
const productRouter = express.Router();


productRouter.get('/', getAllCartProductsController)

productRouter.post('/',
    body('title').isString(),
    body("id").isString(),
    validationMiddleware,       
    addProductToCartController
)

productRouter.put('/:id', updateProductByIdController); 

productRouter.delete('/:id', deleteProductByIdController)

module.exports = productRouter;
