const {Schema, model}= require('mongoose')

const ProductSchema = Schema({
    id: {type: String, required: true},
    image: {type: String, required: true},
    title: {type: String, required: true},
    price: {type: Number, required: true},
    featured: {type: Boolean, default: false},
    quantity: {type: Number, default: 1}
});

const ProductModel = model("CartProducts", ProductSchema);

module.exports = ProductModel;
