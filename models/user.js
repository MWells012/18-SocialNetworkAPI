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
        thoughts: [
          {
            tupe: Schema.Types.ObjectId,
            ref: 'Thought',
          }
        ],
        friends: [
          {
            type: Schema.Types.ObjectId,
            ref: 'Thought',
          }
        ],
      },
      {
          toJSON: {
            getters: true,
          },
        }
      );
const User = model('User', userSchema);
module.exports = Users;