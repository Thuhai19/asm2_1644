const moongoose = require('mongoose');
const CategorySchema = moongoose.Schema(
    {
        name:{
            type: String,
            required: true,
        }
    }
);
const CategoryModel = moongoose.model('addCategory', CategorySchema, 'addCategory');
module.exports = CategoryModel;