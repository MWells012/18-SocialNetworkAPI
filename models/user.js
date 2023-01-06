const { Schema, model } = require('mongoose');

const userSchema = new Schema (
    {
        username: {
            type: String,
            unique: true,
            require: true, 
            trim: true,
        },
        email: {
            type: String,
            require: true,
            unique: true,
            match: [/.+@.+\..+/, 'check again, email address must be valid.'],
        },
        thoughts: {
        },
        friends: {
        },
        {
            toJSON: {
              getters: true,
            },
          }
        );
const User = model('User', userSchema);
module.exports = Users;