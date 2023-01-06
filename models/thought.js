const { Schema, model } = require('mongoose');
const reactionSchema = require('./reaction');

const thoughtSchema = new Schema (
    {
        thoughtText: {
            type: String,
            required: true, 'would you like to leave a thought?',
            minlength: 1,
            maxlength: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [reactionSchema]
    },
    {
        toJSON: {
            getters: true
        },
        id: false,
        }
    );

const Thought = model('Thought', thoughtSchema )
module.export = thoughtSchema;