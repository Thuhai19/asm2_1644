const moongoose = require('mongoose');
const ProductSchema = moongoose.Schema(
    {
        stt: Number,
        name: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        number: {
            type: Number,
            max: 10,
            min: 0,
        },
        price: {
            type: String,
            required: true,
        },
        image: String
    }
);
const ProductModel = moongoose.model('product', ProductSchema, 'product');
module.exports = ProductModel;