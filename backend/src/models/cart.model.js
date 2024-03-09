const {Schema, model}= require('mongoose')

const ProductSchema = Schema({
    id: {type: String, required: true},
    image: {type: Image, required: true},
    title: {type: String, required: true},
    price: {type: Number, required: true},
    featured: {type: Boolean, default: false},
});

const ProductModel = model("Product", ProductSchema);

module.exports = ProductModel;