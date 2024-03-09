const express = require('express');
const {getAllCartProductsController, addProductToCartController} = require('../controller/cartController');
const validationMiddleware = require('../utils/cartValidator');
const {body} = require ('express-validator'); //lo utilizamos luego para validar los datos que ingresan por el body
const productRouter = express.Router();


productRouter.get('/', getAllCartProductsController)

productRouter.post('/', 
    body('title').isString(),
    body("price").isNumeric(),
    validationMiddleware,      
    addProductToCartController
)

module.exports = productRouter;
