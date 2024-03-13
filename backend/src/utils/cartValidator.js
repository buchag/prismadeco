const {validationResult} = require('express-validator'); //sirve para verificar si alguna de las validaciones tuvo algun error

const validationMiddleware = async (req, res, next) => {
    const errors = await validationResult(req);
    if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()})
    }    
    next();
}

const validatorIdMiddleware = (req, res, next) => {
    
    const productId = req.id;
    if(!productId || length(productId) < 10) {
        return res.status(400).json({message: "ID de producto incorrecto"})
    }
    next();
};

module.exports = {validationMiddleware, validatorIdMiddleware};