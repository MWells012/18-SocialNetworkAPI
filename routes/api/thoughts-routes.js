const router = require ('express').Router();

const {
    getThoughts,
    createThought,
    singleThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction
} = require ('');
const { remove } = require('../../models/reaction');

router.route('/').get(getThoughts).post(createThought);
router.route('/:thoughtID').get(singleThought).put(updateThought).delete(deleteThought);
router.route('/:thoughtID/Reactions').post(addReaction);
router.route('/:thoughtID/Reactions/:ReactionID').delete(removeReaction);