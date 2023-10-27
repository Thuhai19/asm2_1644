const moongoose = require('mongoose');
const UserSchema = moongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        }
    }
);
const UserModel = moongoose.model('user', UserSchema, 'user');
module.exports = UserModel;