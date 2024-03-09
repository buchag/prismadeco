const {Schema, model}= require('mongoose')

const ProductSchema = Schema({
    id: {type: String, required: true},
    image: {type: Buffer, required: true},
    title: {type: String, required: true},
    price: {type: Number, required: true},
    featured: {type: Boolean, default: false},
});

const ProductModel = model("Cart", ProductSchema);

module.exports = ProductModel;
